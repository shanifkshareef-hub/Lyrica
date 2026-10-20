// Keeps Lyrica working offline. Served as /sw.js by src/pages/sw.js.ts, which
// defines VERSION (changes on every build) and PAGES (every page on the site)
// above this code.

const CACHE = `lyrica-${VERSION}`;

// Save every page (and the files they use) on the first visit, so songs that
// were never opened still load without internet.
self.addEventListener('install', (event) => {
  event.waitUntil(precache().then(() => self.skipWaiting()));
});

// Remove pages saved by earlier builds.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, url));
  } else if (url.origin === location.origin || url.hostname.startsWith('fonts.g')) {
    // Styles, scripts, icons and Google Fonts.
    event.respondWith(cacheFirst(event));
  }
});

async function precache() {
  const cache = await caches.open(CACHE);
  const files = new Set();
  await Promise.all(
    PAGES.map(async (path) => {
      const response = await fetch(path, { cache: 'no-cache' });
      if (!response.ok) throw new Error(`Could not save ${path} (${response.status})`);
      // Root-relative links with a file extension: /favicon.svg, /_astro/*.css, ...
      const html = await response.clone().text();
      for (const [, file] of html.matchAll(/(?:src|href)="(\/[^"?#]*\.\w+)"/g)) files.add(file);
      await cache.put(path, await withoutRedirect(response));
    }),
  );
  await cache.addAll([...files]);
}

// Pages: load fresh lyrics when online, fall back to the saved copy when offline.
async function networkFirst(request, url) {
  const key = url.pathname.replace(/\/+$/, '') || '/';
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE);
      await cache.put(key, response.clone());
    }
    return response;
  } catch (error) {
    const saved = await caches.match(key);
    if (saved) return saved;
    throw error;
  }
}

// Everything else: answer from the saved copy, and refresh it in the background.
async function cacheFirst(event) {
  const cache = await caches.open(CACHE);
  const saved = await cache.match(event.request);
  const refresh = fetch(event.request).then((response) => {
    if (response.ok || response.type === 'opaque') cache.put(event.request, response.clone());
    return response;
  });
  if (!saved) return refresh;
  event.waitUntil(refresh.catch(() => {}));
  return saved;
}

// A response that went through a redirect (e.g. /lyrics/x -> /lyrics/x/) can't be
// used to answer a page navigation, so store a plain copy of it instead.
async function withoutRedirect(response) {
  if (!response.redirected) return response;
  return new Response(await response.blob(), {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}

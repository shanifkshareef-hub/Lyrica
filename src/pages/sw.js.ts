import type { APIRoute } from 'astro';
import { songs } from '../data/songs';
import worker from '../service-worker.js?raw';

// Serves /sw.js, the offline service worker, with the list of pages to save
// taken from songs.ts — new songs are included on the next build.
export const GET: APIRoute = () => {
  const pages = ['/', ...songs.map((song) => `/lyrics/${song.slug}`)];
  // A new version on every build makes browsers install the new worker and re-save every page.
  const version = Date.now().toString(36);
  const header = `const VERSION = ${JSON.stringify(version)};\nconst PAGES = ${JSON.stringify(pages)};\n\n`;
  return new Response(header + worker, {
    headers: { 'Content-Type': 'text/javascript; charset=utf-8' },
  });
};

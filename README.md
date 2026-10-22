# Lyrica

A small website for song lyrics, grouped by language (Hindi, Malayalam, Tamil). Built with [Astro](https://astro.build) as a fully static site.

## Features

- **Songs grouped by language**, sorted A–Z within each group, with chips to jump to a language.
- **Search** by title or by any words in the lyrics.
- **Zoom** buttons on each lyrics page to make the text bigger or smaller (80%–200%). The chosen size is remembered for every song.
- **Works offline.** After one visit with internet, every song page is saved on the device, so lyrics open even without a connection.
- Light and dark mode, following the device setting.

## Running it locally

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev       # start a dev server at http://localhost:4321
npm run build     # build the site into dist/
npm run preview   # serve the built site to check it before deploying
```

Offline support is turned off in `npm run dev` so cached pages never hide your edits. Use `npm run build` and then `npm run preview` to try it.

## Adding a song

All songs live in [`src/data/songs.ts`](src/data/songs.ts). Add an entry to the `songs` list:

```ts
{
  slug: 'channa-mereya',
  title: 'Channa Mereya',
  language: 'Hindi',
  lyrics: `Acha chalta hoon
Duaon mein yaad rakhna

Channa mereya mereya
...`,
},
```

- **`slug`** is used in the page address (`/lyrics/channa-mereya`). Keep it unique, lowercase and hyphenated.
- **`title`** is shown on the song card and lyrics page.
- **`language`** decides which section the song appears in. A new language creates a new section automatically.
- **`lyrics`** goes between backticks. Line breaks and blank lines between verses are kept exactly as written. Lyrics can be in any script (Malayalam, Tamil, Devanagari or Latin).

Where a song sits in the file doesn't matter: the home page sorts songs by title. New songs are added to the offline list automatically on the next build.

## Project structure

```
src/
  data/songs.ts            all songs, plus helpers to group them by language
  pages/index.astro        home page: song list, language chips and search
  pages/lyrics/[slug].astro  one lyrics page per song, with the zoom buttons
  pages/sw.js.ts           builds /sw.js with the list of pages to save offline
  service-worker.js        the offline logic (saves pages, serves them offline)
  layouts/Layout.astro     shared header, footer and service worker setup
  styles/global.css        all styles
public/
  favicon.svg
```

## Deploying

`npm run build` produces a plain static site in `dist/` that can be hosted anywhere, such as Netlify, Vercel, Cloudflare Pages or GitHub Pages. The site must be served over `https://` for offline support to work.

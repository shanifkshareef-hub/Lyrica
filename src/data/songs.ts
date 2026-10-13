export interface Song {
  /** Used in the URL: /lyrics/<slug> — keep it unique, lowercase, hyphenated. */
  slug: string;
  title: string;
  language: string;
  year?: number;
  /** Write lyrics as-is; line breaks and blank lines between verses are preserved. */
  lyrics: string;
}

// Add your songs here. Songs are grouped on the home page by `language`.
export const songs: Song[] = [
  {
    slug: 'morning-light',
    title: 'Morning Light',
    language: 'English',
    year: 2024,
    lyrics: `Wake up, the sky is turning gold
A brand new story to be told
Leave the shadows of the night
Step into the morning light

Every road begins with one small stride
Every heart has a fire inside
Hold on, the day is burning bright
Step into the morning light`,
  },
  {
    slug: 'paper-boats',
    title: 'Paper Boats',
    language: 'English',
    year: 2025,
    lyrics: `We folded dreams in paper boats
And let them drift on monsoon streams
Laughing as the water rose
Chasing all our childhood dreams

Now the rain still finds my window
And I hear those streams again
Every drop a little memory
Of the boats we sailed back then`,
  },
  {
    slug: 'nilave-vaa',
    title: 'Nilave Vaa',
    language: 'Malayalam',
    year: 2023,
    lyrics: `നിലാവേ വാ, നീ എൻ അരികിൽ വാ
മൗനമായ് ഈ രാവിൽ കൂടെ വാ
താരകങ്ങൾ മിന്നും നേരം
എൻ മനസ്സിൻ ഗാനം കേൾക്കാൻ വാ

കാറ്റിൻ ഈണം പാടും നേരം
ഓർമ്മകൾ പൂക്കും തീരം
നിലാവേ വാ, നീ എൻ അരികിൽ വാ`,
  },
  {
    slug: 'mazhathullikal',
    title: 'Mazhathullikal',
    language: 'Malayalam',
    year: 2024,
    lyrics: `മഴത്തുള്ളികൾ പാടുന്നു
മണ്ണിൻ മണം പരക്കുന്നു
ഇലകളിൽ ഈണം തുളുമ്പുന്നു
മനസ്സിൽ ഒരു പാട്ട് ഉണരുന്നു`,
  },
  {
    slug: 'kanavugal',
    title: 'Kanavugal',
    language: 'Tamil',
    year: 2024,
    lyrics: `கனவுகள் கண்ணில் மலரும்
காலை வெயில் போல் ஒளிரும்
நெஞ்சில் ஒரு பாடல் பிறக்கும்
நேசம் அதில் நிறையும்`,
  },
  {
    slug: 'safar',
    title: 'Safar',
    language: 'Hindi',
    year: 2025,
    lyrics: `चल पड़ा हूँ मैं एक नए सफ़र पे
ख़्वाबों की राहों में, उम्मीदों के घर पे
हवा कुछ कहती है, धूप मुस्काती है
हर मोड़ पे ज़िंदगी नया गीत गाती है`,
  },
];

export interface LanguageGroup {
  language: string;
  songs: Song[];
}

/** Groups songs by language, both sorted alphabetically. */
export function groupByLanguage(list: Song[] = songs): LanguageGroup[] {
  const groups = new Map<string, Song[]>();
  for (const song of list) {
    const bucket = groups.get(song.language) ?? [];
    bucket.push(song);
    groups.set(song.language, bucket);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([language, items]) => ({
      language,
      songs: [...items].sort((a, b) => a.title.localeCompare(b.title)),
    }));
}

/** Turns a language name into a page-anchor id, e.g. "Malayalam" -> "malayalam". */
export function languageId(language: string): string {
  return language.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

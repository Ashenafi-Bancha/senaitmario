# How to add photos to the site

A simple recipe you can follow (or hand the photos to Claude Code and ask it
to place them). One great photo per section beats ten average ones — this is
a fashion site, curation *is* the design.

## 1. Sort the photos into the category folders

```
public/images/
├── portraits/     her 5–10 strongest solo shots → home hero + press page
├── collections/   runway/collection photos, grouped by show (city + year) → /work
├── story/         life & journey — Wolaita Sodo, Rome, travels → /story chapters
├── peace/         advocacy — the 2019 Wolaita Sodo show, expos, UN events → /peace
├── institute/     campus, students, classes → /institute
└── life/          everything else worth showing (a /life gallery can be added)
```

Name files `year-place-or-show-01.jpg`, all lowercase with dashes, e.g.
`2019-wolaita-sodo-peace-show-01.jpg`. No spaces, no Amharic in filenames
(browsers and git handle plain ASCII most reliably).

## 2. Prepare each photo before copying it in

- Export as **JPG**, longest edge **~2000 px**, quality ~80. The site converts
  to AVIF/WebP and resizes per device automatically — you never upload
  multiple sizes.
- Keep the originals somewhere safe; the repo only gets the web copies.
- The home hero image must stay **under 400 KB**.

## 3. Register the photo in the content layer

Every image needs four things: the file, its pixel size, an alt text, and a
**credit**. Examples:

**A story chapter photo** — in `content/story.ts`, add `image` to a chapter:

```ts
{
  id: 'rome',
  place: 'Rome',
  paletteId: 'evergreen-light',
  titleKey: 'story.chapters.rome.title',
  bodyKey: 'story.chapters.rome.body',
  image: {
    src: '/images/story/2019-rome-01.jpg',
    width: 2000,          // the real pixel dimensions of the file
    height: 1333,
    alt: 'Senait Mario in Rome',
    credit: 'Personal archive',   // or the photographer's name
  },
},
```

The story page lays the photo beside the chapter text automatically.

**A collection photo** — in `content/collections.ts`, add to a collection's
`images` array (same shape). The first image becomes the card on `/work`.

**The hero** — in `app/[locale]/page.tsx`, replace the `HERO_IMAGE` constant
with the real portrait's path/size/credit.

## 4. Credits are mandatory — this is the one rule

- Runway and editorial photos are usually **owned by the photographer**, not
  the person in them. Use the photographer's name as `credit`, and get their
  OK before publishing.
- Family/personal photos: `credit: 'Personal archive'` is fine.
- A missing credit shows a red warning in dev mode and will not look finished.
- Add one row per photo to `RIGHTS.md` (file, source, credit, status) so
  there's a record of what's cleared.

## 5. Check it

```bash
npm run dev
```

Open http://localhost:3000/en — new photos appear wherever you registered
them, with the credit line styled under each one.

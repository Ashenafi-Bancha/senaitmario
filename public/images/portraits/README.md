# Where to save her photographs

Every photo of Dr. Senait Mario goes in one of the folders under
`public/images/`. This file covers the two that show **her**.

---

## 1. The hero photograph (the big one on the home page)

**Save it as:**

```
public/images/portraits/hero.jpg
```

Then open [`content/hero.ts`](../../../content/hero.ts) and change four lines:

```ts
export const heroImage: ImageAsset = {
  src: '/images/portraits/hero.jpg',
  width: 2400,                    // the file's real pixel size
  height: 1600,
  alt: 'Dr. Senait Mario photographed in Rome',
  credit: 'Photographer name',    // who took it
};
```

If the photograph is dark or moody, also change the line above it:

```ts
export const heroTone: 'light' | 'dark' = 'dark';
```

That flips her name to near-white over a darkened scrim. Leave it as
`'light'` for a bright photograph, where her name is set in deep brown.

### What makes a good hero here

The image fills the entire screen, so:

- **Landscape or square crops work best.** A tall portrait gets cropped top
  and bottom on a wide screen.
- **Leave calm space on the LEFT of the frame.** Her name and the button sit
  over that side; a busy left edge fights the type.
- **At least 2000px on the long edge**, exported as JPG at about quality 80.
  The site converts and resizes it for every device automatically, so one file
  is enough.
- **Aim under 400 KB** so the page stays fast on a phone.

---

## 2. The small portrait beside her name in the header

Optional, and separate from the hero. Save it as:

```
public/images/portraits/masthead.jpg
```

It must be a **square crop of her face** (256×256 or larger), because it
renders as a small circle. Then set `brandPortrait` in
[`content/brand.ts`](../../../content/brand.ts).

---

## 3. Everything else

| Kind of photo | Folder |
| --- | --- |
| Her portraits, press shots | `public/images/portraits/` |
| Collections and runway | `public/images/collections/` |
| Life and journey (Wolaita Sodo, Rome, travels) | `public/images/story/` |
| Peace shows, expos, UN events | `public/images/peace/` |
| The institute, students, classes | `public/images/institute/` |
| Anything else worth showing | `public/images/life/` |

Naming: lowercase with dashes, no spaces, e.g. `2019-wolaita-sodo-01.jpg`.

---

## The one rule that is not negotiable

**Every photograph needs a `credit`.** Runway and editorial photographs are
owned by the photographer, not by the person in them, so publishing one
uncredited can cause her real trouble.

- A professional shoot: the photographer's name, and their permission.
- A family or personal photo: `credit: 'Personal archive'` is fine.

Add a row for each new photo in [`RIGHTS.md`](../../../RIGHTS.md). If a credit
is missing, the site shows a loud warning in development rather than quietly
publishing it.

---

## Summary

| What | Save as | Then |
| --- | --- | --- |
| Hero photo | `public/images/portraits/hero.jpg` | Set `heroImage` in `content/hero.ts` |
| Dark hero photo | same | Also set `heroTone` to `'dark'` |
| Header portrait | `public/images/portraits/masthead.jpg` | Set `brandPortrait` in `content/brand.ts` |
| Her logo | `public/images/brand/logo.svg` | See [brand/README.md](../brand/README.md) |

# Dr. Senait Mario — personal site (prototype)

First prototype of the personal site for Dr. Senait Mario — fashion designer,
model, sociologist and UN Peace Ambassador; founder and CEO of Da Mario's
Fashion and Technology Institute, Addis Ababa. Based in Rome.

**This is a site about a real living person.** Every biographical fact comes
from the client's supplied content. Anything not supplied is rendered as a
visible `TODO` — see [the client TODO list](#what-the-client-must-supply).
Do not "fill in" biography, awards, quotes or press coverage without client
confirmation.

## Stack

- Next.js 15 (App Router, TypeScript strict), Tailwind CSS 4 (custom token
  layer, default palette disabled), next-intl (`en` / `am` / `it`), Resend,
  Zod. Deploy target: Vercel. **No 3D** — that signature belongs to the
  institute's site; this one is carried by photography and colour.

```bash
npm install
npm run dev        # dev server
npm run check:contrast  # AA gate over every palette (also runs as prebuild)
npm run build      # fails if any palette text pair drops below 4.5:1
```

Secrets: copy `.env.example` → `.env.local` (`RESEND_API_KEY`,
`CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL`).

## The colour-field system (the signature)

Her stated method is that she promotes Ethiopia through the colours of her
collections, so colour is the site's structure, not decoration. Each body of
work / chapter owns a palette; as the visitor scrolls or navigates, the whole
page ground transitions and text, borders and focus rings re-derive from it.

- **Current direction (client feedback, 2026-08): ivory default, black
  optional.** Every page stands on the pale green-tinged ivory ground
  (`ivory`: `#F0F4EE`) with deep brown ink; the visitor can switch the whole
  site to the **modern black** theme (`noir`) from the header — persisted in
  localStorage, crossing over in one eased transition (instant under reduced
  motion). No yellow anywhere. The `/colour` page explains the scheme to
  readers. The section-palette engine is unchanged underneath, so
  per-collection palettes extracted from real photography can still take over
  later (noir, when active, wins over section palettes).
- Palettes live in **`content/palettes.ts`** — the single swap point. All
  values are **provisional** until confirmed against real collection
  photography; replacing them is a one-file change.
- Tokens (`--ground`, `--ink`, `--muted`, `--accent`, `--line`) are registered
  `@property` custom properties in `app/globals.css`, so the values themselves
  interpolate (~800 ms, eased). `ThemeProvider` writes the active palette onto
  `<html>`; `ThemeSection` claims the theme via IntersectionObserver when a
  section holds the viewport centre; `RouteTheme` themes whole routes.
- Components speak only semantic utilities (`bg-ground`, `text-ink`,
  `text-muted`, `border-line`, focus ring from `--accent`). The default
  Tailwind palette is wiped, so hardcoded colours fail to compile.
- **Reduced motion:** the colour still changes — it carries meaning — but
  instantly. The feature is never disabled.
- **Contrast gate:** `scripts/check-contrast.ts` (wired as `prebuild`) asserts
  ≥ 4.5:1 for every palette's `ink`, `muted` and `accent` against `ground`
  and fails the build otherwise.

## Content model

Typed content in `content/` (`types.ts` is the CMS contract): identity, story
chapters, collections, swatches, recognition, palettes. Components consume
only these types plus `messages/*.json`, so a headless CMS can replace the
data files without touching components.

- **Images:** every `ImageAsset` carries a mandatory `credit`;
  `CreditedImage` renders it visibly and shows a loud dev warning when it is
  missing. Every image must be registered in **`RIGHTS.md`** (all entries
  currently `UNCLEARED`). Placeholder art is generated SVG — real photography
  goes through `next/image` (AVIF/WebP, explicit dimensions, lazy; `priority`
  on the hero only, hero budget 400 KB).
- **Recognition:** the exact awarding body and full title of each of the three
  recognitions must be confirmed before launch (see comment in
  `content/recognition.ts` and `app/[locale]/press/page.tsx`). The 2019
  doctorate is honorary and is always presented as such.
- **Quotes:** there are no approved verbatim quotes. `PullQuote` renders
  paraphrased positions unquoted, with a visible `TODO — verbatim quote to be
  approved by client` marker. Never put invented sentences in quotation marks.

## Internationalisation

next-intl with `/[locale]` prefix routing (`en`, `am`, `it`), cookie-persisted
choice, `lang` set on `<html>`. `messages/en.json` is complete;
**`am.json` and `it.json` are machine drafts** (flagged by the
`_MACHINE_DRAFT` key at the top of each file) and require professional human
review before publication. Noto Sans Ethiopic loads only on `/am` routes and
Amharic runs on its own line-height scale.

## Typography (provisional — pending client/designer sign-off)

Display: Bodoni Moda · Body: Alegreya Sans · Utility (credits/metadata):
IBM Plex Mono · Amharic: Noto Sans Ethiopic. All self-hosted and subset at
build time via `next/font` (no runtime Google requests), `font-display: swap`.

## Contact form

`/contact` → `app/api/contact/route.ts`: shared Zod schema client+server,
per-IP in-memory rate limiting (best-effort per serverless instance —
upgrade to a shared store for production), Resend notification, **no data
storage**. With secrets unset the endpoint returns 503 rather than pretending
delivery succeeded.

## Deviation from the brief

**Framer Motion was cut.** Its synchronous core pushed `/work` and `/colour`
to ~152–157 KB first-load JS against the 140 KB budget. Scroll reveals are
instead a ~1 KB IntersectionObserver + CSS implementation
(`components/ui/Reveal.tsx`) with the same behaviour, gated on
`(scripting: enabled)` and `(prefers-reduced-motion: no-preference)`; the
colour-field transitions were already pure CSS. If the budget is relaxed or a
richer motion language is wanted later, it can return behind `LazyMotion`.

## What the client must supply

Every item below is rendered as a visible `TODO` in the UI or marked in code:

1. **Contact email** and **booking contact** (`content/identity.ts`, footer, `/contact`).
2. **Instagram / Facebook handles** (footer).
3. **Real palettes** extracted from collection photography (`content/palettes.ts`).
4. **Collection data** — titles, years, cities, descriptions (`content/collections.ts`, `messages/*`).
5. **Photography** with photographer credits and written clearances (`RIGHTS.md` — all entries `UNCLEARED`; hero ≤ 400 KB).
6. **Colour Index swatches** — real colours lifted from garments, names, and what each carries (`content/swatches.ts`, `messages/*`).
7. **Approved verbatim quotes** for pull-quote blocks (`PullQuote`).
8. **Exact awarding body + full official title** for the 2016 MICE award, the 2017 UN Peace Ambassador naming, and the 2019 honorary doctorate (`content/recognition.ts`).
9. **Institute site URL** for the `/institute` outbound link.
10. **Press kit assets** — high-res images, PDF, coverage links (`/press`).
11. **Human review of `am` and `it` translations** (both files are machine drafts).
12. **Typeface sign-off** (current faces are provisional).
13. **Decision on a reply channel for the contact form** — the specified fields
    (name, organisation, enquiry type, message) include no email/phone, so
    enquirers currently cannot be answered directly.
14. **OG photography** — the shared OpenGraph card is typographic until cleared
    imagery allows per-page images.

# Dr. Senait Mario — personal site (prototype)

First prototype of the personal site for Dr. Senait Mario — fashion designer,
model, sociologist and UN Peace Ambassador; founder and General Manager of Da Mario's
Fashion and Technology Institute, Addis Ababa. Based in Rome.

**This is a site about a real living person.** Every biographical fact comes
from the client's supplied content. Anything not supplied is rendered as a
visible `TODO` — see [the client TODO list](#what-the-client-must-supply).
Do not "fill in" biography, awards, quotes or press coverage without client
confirmation.

## Stack

- Next.js 15 (App Router, TypeScript strict), Tailwind CSS 4 (custom token
  layer, default palette disabled), next-intl (`en` / `am` / `it` / `wal`), Resend,
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
- **Quotes:** `content/quotes.ts` holds her genuine published words, each with
  outlet, date and URL, and `PullQuote` renders them in quotation marks WITH
  the citation visible. Its other mode renders an unquoted paraphrase. Never
  put an invented sentence in either mode.

## Internationalisation

next-intl with `/[locale]` prefix routing (`en`, `am`, `it`, `wal`),
cookie-persisted choice, `lang` set on `<html>`. `messages/en.json` is
complete; **`am.json` and `it.json` are machine drafts** (flagged by the
`_MACHINE_DRAFT` key at the top of each file) and require professional human
review before publication.

**Wolayttatto Doonaa (`wal`)** — her mother tongue, the language of Wolaita
Sodo — is offered in the switcher but its pages are **not translated yet**.
It is listed in `PENDING_LOCALES` (`i18n/routing.ts`), so the locale layout
renders `PendingLocaleNotice` instead of page content: the language named
properly, a courteous note that the translation is being made, the same note
in Amharic, and an invitation to read in English, Amharic or Italian.
Middleware collapses every `/wal/<path>` onto `/wal` so the notice lives at
one URL, and the sitemap lists only that root.

**No machine translation will be published for `wal`.** A native Wolaytta
speaker must write and review both the notice wording and the site
translation — see the `pending.todo` string. Getting her own mother tongue
wrong would be worse than not offering it yet.

Noto Sans Ethiopic loads for the Ethiopic-script locales (`am` and `wal`)
only, and both run on a taller line-height scale.

## Typography (provisional — pending client/designer sign-off)

Display: Jost · Body: Alegreya Sans · Utility (credits/metadata):
IBM Plex Mono · Ethiopic script (Amharic, Wolayttatto Doonaa): Noto Sans Ethiopic. All self-hosted and subset at
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

## ⚠ Verification findings (research, Aug 2026) — resolve before launch

A web search for published sources turned up only **three articles** about her
(all listed in `content/coverage.ts`): Addis Standard (5 Jul 2019), Nigerian
Tribune (26 Jul 2019) and an Amharic Addis Zemen profile (5 Jul 2021). What
that research changes:

1. **The three recognitions are not independently verifiable.** All trace to
   one sentence in the 2019 Addis Standard piece that ends "…she told Addis
   Standard". The 2017 **UN Peace Ambassador** title is the highest-risk claim
   on the site — the UN's formal designations are *Messenger of Peace* and
   *Goodwill Ambassador*, and she is on neither roster; titles worded "UN
   Peace Ambassador" are often conferred by non-UN bodies. Get the
   certificates and name the conferring organisation in the copy. Full notes
   in `content/recognition.ts`; the same warning is on `lib/schema.ts`
   because JSON-LD is republished by search engines.
2. **Two source conflicts to settle with her:** whether she settled in **Rome**
   (Addis Standard, and her LinkedIn) or **Milan** (Tribune) — Rome is better
   supported and is what the site currently says; and whether the June 2019
   Wolaita Sodo show featured **eight** designers (Addis Standard) or **six**
   (Tribune) — the site deliberately states no number.
3. **`senaitmario.com` is unregistered.** Her own Facebook page lists it as her
   website but it does not resolve — worth registering for this site.
4. **The institute's site `damariosfti.edu.et` is dead** (no DNS, no archive),
   so the `/institute` outbound link stays TODO. Its accreditation and licence
   numbers exist only as search-engine snippets of that dead site — do not
   publish them without a document.
5. **The Rome Business School partnership could not be corroborated** from
   RBS's own site. Confirm before stating it publicly.
6. **Social accounts:** her Facebook is live on the site —
   `www.facebook.com/senait.mario`, supplied by the client and stored in
   `content/social.ts`. Research also found a "Senait Mario ONE PEACE fashion"
   page and a "Damarios FTI" page; check with her whether any of these should
   also be linked. Instagram `@senaitmario` is now live too — the client
   confirmed it directly; note that research could not tie it to her from
   public signals alone, so it rests on that confirmation. The YouTube
   `@senaitmario1` is definitely someone else and must never be linked.
7. **Not published anywhere:** named collections, a clothing label name,
   African Fashion Expo edition details, or any specific Milan/London/Paris
   show (date, venue, season). The Milan/London/Paris line traces to her own
   statement — do not upgrade it to a Fashion Week appearance.
8. **New, single-sourced origin story** (Amharic 2021 profile, worth
   confirming): she wanted to be a doctor or lawyer, taught for several years,
   was studying philosophy at Addis Ababa University when she won a
   scholarship to Uganda, and entered fashion after meeting a Kenyan woman
   there who ran a modelling and fashion school.

### One Peace Fashion — what the research established

"One Peace Fashion" is confirmed as her standing event brand, not a one-off
title: the Nigerian Tribune names the June 2019 Wolaita Sodo event that way,
her own public Facebook page is titled "Senait Mario ONE PEACE fashion" and
has been running since at least April 2014, and a 2019 third-party post calls
her its founder. Addis Standard's "Peace Fashion Show" is that paper's
rendering of the same event, not a second brand.

**Only the June 2019 edition is documented anywhere reachable.** The Tribune
calls the platform "an annual showcase of ready-to-wear from across Africa",
but no other edition — earlier or later — appears in any source, and there is
nothing at all after 2019. `/peace` therefore names the platform, documents
that one edition, and asks for the rest, rather than implying a run of shows
that cannot be evidenced. Edition history is the single most valuable thing
the client can add to that page.

The Ethiopian Press Agency piece (`press.et/herald/?p=6603`) would likely add
detail but now 404s with no Wayback capture — unrecoverable. "African Fashion
Expo" is named by her once, in the 2019 Addis Standard interview, with no
edition, date or city published anywhere, so it is listed as a named platform
with no claims attached. Details in `content/events.ts`.

## What the client must supply

Every item below is rendered as a visible `TODO` in the UI or marked in code:

1. **Contact email** and **booking contact** (`content/identity.ts`, footer, `/contact`).
1. **Her hero photograph** — save as `public/images/portraits/hero.jpg` and set
   `heroImage` in `content/hero.ts` (flip `heroTone` to `'dark'` for a dark
   image). Full guidance, including what crop works for a full-screen hero, in
   [`public/images/portraits/README.md`](public/images/portraits/README.md).
1. **Her logo** and **a portrait for the masthead** — both are slots in
   `content/brand.ts`, both currently `null`. Save logo files in
   `public/images/brand/` and the tab icon as `app/icon.svg`; full instructions
   in [`public/images/brand/README.md`](public/images/brand/README.md). Until a
   logo is set the header shows her name in the display face, which is a valid
   wordmark. No stock mark or stock face is ever substituted.
   Note: `app/favicon.ico` is still the project template's default and must be
   deleted once a real `app/icon.svg` is added.
2. ~~Social handles~~ — **done.** Facebook and Instagram are both live (`content/social.ts`). Ask her whether the "Senait Mario ONE PEACE fashion" and "Damarios FTI" pages should also be linked.
3. **Real palettes** extracted from collection photography (`content/palettes.ts`).
4. **Collection data** — titles, years, cities, descriptions (`content/collections.ts`, `messages/*`).
5. **Photography** with photographer credits and written clearances (`RIGHTS.md` — all entries `UNCLEARED`; hero ≤ 400 KB).
6. **Colour Index swatches** — real colours lifted from garments, names, and what each carries (`content/swatches.ts`, `messages/*`).
7. **Approved verbatim quotes** for pull-quote blocks (`PullQuote`).
8. **Exact awarding body + full official title** for the 2016 MICE award, the 2017 UN Peace Ambassador naming, and the 2019 honorary doctorate (`content/recognition.ts`).
9. **Institute site URL** for the `/institute` outbound link.
10. **Press kit assets** — high-res images, PDF, coverage links (`/press`).
11. **Human review of `am` and `it` translations** (both files are machine drafts), and a **native Wolayttatto Doonaa speaker** to write the `wal` notice wording and, in time, the full translation.
12. **Typeface sign-off** (current faces are provisional).
13. **Decision on a reply channel for the contact form** — the specified fields
    (name, organisation, enquiry type, message) include no email/phone, so
    enquirers currently cannot be answered directly.
14. **OG photography** — the shared OpenGraph card is typographic until cleared
    imagery allows per-page images.

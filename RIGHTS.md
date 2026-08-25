# Image rights register

Every image on this site must be listed here with its source, credit and
clearance status **before launch**. Runway and editorial photography is almost
always owned by the photographer, not the designer — nothing ships without a
written clearance and a visible credit.

Statuses: `UNCLEARED` → `PENDING` (clearance requested) → `CLEARED (ref)`.

| File | Used on | Source | Credit | Status |
| --- | --- | --- | --- | --- |
| `public/images/placeholders/hero.svg` | Home hero | Generated placeholder (no photograph) | TODO | UNCLEARED |
| `public/images/placeholders/collection-01-a.svg` | /work, /work/placeholder-01 | Generated placeholder (no photograph) | TODO | UNCLEARED |
| `public/images/placeholders/collection-01-b.svg` | /work/placeholder-01 | Generated placeholder (no photograph) | TODO | UNCLEARED |
| `public/images/placeholders/collection-02-a.svg` | /work, /work/placeholder-02 | Generated placeholder (no photograph) | TODO | UNCLEARED |
| `public/images/placeholders/collection-02-b.svg` | /work/placeholder-02 | Generated placeholder (no photograph) | TODO | UNCLEARED |
| `public/images/placeholders/collection-03-a.svg` | /work, /work/placeholder-03 | Generated placeholder (no photograph) | TODO | UNCLEARED |
| `public/images/placeholders/collection-03-b.svg` | /work/placeholder-03 | Generated placeholder (no photograph) | TODO | UNCLEARED |
| `app/[locale]/opengraph-image.tsx` (generated PNG) | OpenGraph/social cards | Typographic, generated at request time (no photograph) | n/a — no photography | UNCLEARED |

## Rules

1. Every image record in `content/` carries a mandatory `credit` field; a
   missing or `TODO` credit renders a visible warning in development
   (`components/media/CreditedImage.tsx`) and must never reach production.
2. When real photography arrives: add the file here first, with photographer,
   licence/usage terms (`usageNote` in the data if restricted), and clearance
   reference. Only then add it to `content/`.
3. Do not remove rows for retired images — mark them `RETIRED` so the usage
   history stays auditable.

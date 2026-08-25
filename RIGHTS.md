# Image rights register

Every image on this site must be listed here with its source, credit and
clearance status **before launch**. Runway and editorial photography is almost
always owned by the photographer, not the designer — nothing ships without a
written clearance and a visible credit.

Statuses: `UNCLEARED` → `PENDING` (clearance requested) → `CLEARED (ref)`.
`LICENSED PLACEHOLDER` = openly-licensed stock (Wikimedia Commons) used
temporarily with attribution rendered on-page; **must be replaced with the
client's real photography before launch**. `RETIRED` = no longer used, kept
for audit history.

## Current images

| File | Used on | Source | Credit | Licence | Status |
| --- | --- | --- | --- | --- | --- |
| `public/images/portraits/hero-placeholder.jpg` | Home hero | [Commons: Detail, Traditional Ethiopian Garment](https://commons.wikimedia.org/wiki/File:Detail,_Traditional_Ethiopian_Garment_(2131600381).jpg) | A. Davey | CC BY 2.0 | LICENSED PLACEHOLDER |
| `public/images/story/sodo.jpg` | /story (Wolaita Sodo) | [Commons: Wolaita Sodo](https://commons.wikimedia.org/wiki/File:Wolaita_Sodo.jpg) | Bernard Gagnon | CC BY-SA 3.0 | LICENSED PLACEHOLDER |
| `public/images/story/nairobi.jpg` | /story (Nairobi) | [Commons: Nairobi Skyline Savannah Kenya May19](https://commons.wikimedia.org/wiki/File:Nairobi_Skyline_Savannah_Kenya_May19_R1600687.jpg) | Timothy A. Gonsalves | CC BY-SA 4.0 | LICENSED PLACEHOLDER |
| `public/images/story/kampala.jpg` | /story (Kampala) | [Commons: Kampala skyline](https://commons.wikimedia.org/wiki/File:Kampala_skyline.jpg) | Todd Huffman | CC BY 2.0 | LICENSED PLACEHOLDER |
| `public/images/story/rome.jpg` | /story (Rome) | [Commons: Sant'Angelo bridge, dusk, Rome](https://commons.wikimedia.org/wiki/File:Sant%27Angelo_bridge,_dusk,_Rome,_Italy.jpg) | Jebulon | CC0 | LICENSED PLACEHOLDER |
| `public/images/story/stages-milan.jpg` | /story (Milan · London · Paris) | [Commons: Galleria Vittorio Emanuele Interno](https://commons.wikimedia.org/wiki/File:Galleria_Vittorio_Emanuele_Interno.jpg) | Maurizio Moro5153 | CC BY-SA 4.0 | LICENSED PLACEHOLDER |
| `public/images/story/addis.jpg` | /story (Addis Ababa) | [Commons: Sunset on the rising city, Addis Ababa](https://commons.wikimedia.org/wiki/File:Sunset_on_the_rising_city,_Addis_Ababa_-_Flickr_-_jeanotr.jpg) | Jean Rebiffé | CC BY 2.0 | LICENSED PLACEHOLDER |
| `public/images/collections/weaver-pit-loom.jpg` | /work placeholder-01 | [Commons: Waving in Ethiopia 01](https://commons.wikimedia.org/wiki/File:Waving_in_Ethiopia_01.jpg) | Thomas Fuhrmann | CC BY-SA 4.0 | LICENSED PLACEHOLDER |
| `public/images/collections/weaving-fibres.jpg` | /work placeholder-01 | [Commons: Weaving Supplies, Adigrat](https://commons.wikimedia.org/wiki/File:Weaving_Supplies,_Adigrat_(11831170076).jpg) | Rod Waddington | CC BY-SA 2.0 | LICENSED PLACEHOLDER |
| `public/images/collections/loom-blue-warp.jpg` | /work placeholder-02 | [Commons: Waving in Ethiopia 03](https://commons.wikimedia.org/wiki/File:Waving_in_Ethiopia_03.jpg) | Thomas Fuhrmann | CC BY-SA 4.0 | LICENSED PLACEHOLDER |
| `public/images/collections/shiro-meda-market.jpg` | /work placeholder-02 | [Commons: Shiro Meda clothing market](https://commons.wikimedia.org/wiki/File:Shiro_Meda_clothing_market.jpg) | Lucy Shaw | CC BY-SA 4.0 | LICENSED PLACEHOLDER |
| `public/images/collections/museum-costume-01.jpg` | /work placeholder-03 (pending download) | [Commons: Traditional Costume, National Museum of Ethiopia 01](https://commons.wikimedia.org/wiki/File:Traditional_Costume_-_National_Museum_of_Ethiopia_-_Addis_Ababa_-_Ethiopia_-_01_(8743136699).jpg) | Adam Jones | CC BY-SA 2.0 | LICENSED PLACEHOLDER |
| `public/images/collections/museum-costume-03.jpg` | /work placeholder-03 (pending download) | [Commons: Traditional Costume, National Museum of Ethiopia 03](https://commons.wikimedia.org/wiki/File:Traditional_Costume_-_National_Museum_of_Ethiopia_-_Addis_Ababa_-_Ethiopia_-_03_(8743136173).jpg) | Adam Jones | CC BY-SA 2.0 | LICENSED PLACEHOLDER |
| `app/[locale]/opengraph-image.tsx` (generated PNG) | OpenGraph/social cards | Typographic, generated at request time (no photograph) | n/a — no photography | n/a | UNCLEARED |

## Retired

| File | Was used on | Note |
| --- | --- | --- |
| `public/images/placeholders/hero.svg` | Home hero | Generated SVG, replaced by licensed stock placeholder |
| `public/images/placeholders/collection-01-a/b.svg` | /work placeholder-01 | Generated SVG, replaced |
| `public/images/placeholders/collection-02-a/b.svg` | /work placeholder-02 | Generated SVG, replaced |
| `public/images/placeholders/collection-03-a/b.svg` | /work placeholder-03 | Generated SVG — still active until the museum-costume downloads land |

## Rules

1. Every image record in `content/` carries a mandatory `credit` field; a
   missing or `TODO` credit renders a visible warning in development
   (`components/media/CreditedImage.tsx`) and must never reach production.
2. **No stranger's face may represent Dr. Senait Mario.** Placeholder imagery
   is places, garments, fabric and craft — never a portrait presented as her.
3. Wikimedia Commons placeholders keep their attribution rendered under the
   image (author, licence). CC BY-SA images used unmodified apart from
   resizing; verify licence terms again at launch, or simply replace them all
   with the client's cleared photography (the goal).
4. When real photography arrives: add the file here first, with photographer,
   licence/usage terms (`usageNote` in the data if restricted), and clearance
   reference. Only then add it to `content/`.
5. Do not remove rows for retired images — move them to Retired so the usage
   history stays auditable.

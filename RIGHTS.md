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
| `public/images/portraits/hero.jpg` | Home hero | Supplied by the client, 2026-08-29 | **TODO - photographer** | **TODO - usage terms** | UNCLEARED |
| `public/images/story/sodo.jpg` | /story (Wolaita Sodo), second look | **TODO** - supplied by the client 2026-08-31, origin not stated | **TODO** | **TODO** | UNCLEARED |
| `public/images/story/nairobi.jpg` | /story (Nairobi) | **TODO** - supplied by the client 2026-08-31, origin not stated | **TODO** | **TODO** | UNCLEARED |
| `public/images/story/kampala.jpg` | /story (Kampala) | **TODO** - supplied by the client 2026-08-31, origin not stated | **TODO** | **TODO** | UNCLEARED |
| `public/images/story/rome.jpg` | /story (Rome) | **TODO** - supplied by the client 2026-08-31, origin not stated | **TODO** | **TODO** | UNCLEARED |
| `public/images/story/stages.jpg` | /story (Milan · London · Paris), lead photograph | **TODO** - supplied by the client 2026-08-31, origin not stated | **TODO** | **TODO** | UNCLEARED |
| `public/images/story/sodo-statue.jpg` | /story (Wolaita Sodo), lead photograph | **TODO** - supplied by the client 2026-08-31 | **TODO** | **TODO** | UNCLEARED |
| `public/images/story/paris.jpg` | /story (Milan · London · Paris), second look | **TODO** - supplied by the client 2026-08-31 | **TODO** | **TODO** | UNCLEARED |
| `public/images/brand/senait_mario.jpg` | Masthead portrait, every page | Supplied by the client 2026-08-31 | **TODO - photographer** | **TODO** | UNCLEARED |
| `public/images/story/addis.jpg` | /story (Addis Ababa) | [Commons: Sunset on the rising city, Addis Ababa](https://commons.wikimedia.org/wiki/File:Sunset_on_the_rising_city,_Addis_Ababa_-_Flickr_-_jeanotr.jpg) | Jean Rebiffé | CC BY 2.0 | LICENSED PLACEHOLDER |
| `public/images/collections/weaver-pit-loom.jpg` | /work placeholder-01 | [Commons: Waving in Ethiopia 01](https://commons.wikimedia.org/wiki/File:Waving_in_Ethiopia_01.jpg) | Thomas Fuhrmann | CC BY-SA 4.0 | LICENSED PLACEHOLDER |
| `public/images/collections/weaving-fibres.jpg` | /work placeholder-01 | [Commons: Weaving Supplies, Adigrat](https://commons.wikimedia.org/wiki/File:Weaving_Supplies,_Adigrat_(11831170076).jpg) | Rod Waddington | CC BY-SA 2.0 | LICENSED PLACEHOLDER |
| `public/images/collections/loom-blue-warp.jpg` | /work placeholder-02 | [Commons: Waving in Ethiopia 03](https://commons.wikimedia.org/wiki/File:Waving_in_Ethiopia_03.jpg) | Thomas Fuhrmann | CC BY-SA 4.0 | LICENSED PLACEHOLDER |
| `public/images/collections/shiro-meda-market.jpg` | /work placeholder-02 | [Commons: Shiro Meda clothing market](https://commons.wikimedia.org/wiki/File:Shiro_Meda_clothing_market.jpg) | Lucy Shaw | CC BY-SA 4.0 | LICENSED PLACEHOLDER |
| `public/images/collections/museum-costume-01.jpg` | /work placeholder-03 | [Commons: Traditional Costume, National Museum of Ethiopia 01](https://commons.wikimedia.org/wiki/File:Traditional_Costume_-_National_Museum_of_Ethiopia_-_Addis_Ababa_-_Ethiopia_-_01_(8743136699).jpg) | Adam Jones | CC BY-SA 2.0 | LICENSED PLACEHOLDER |
| `public/images/collections/museum-costume-03.jpg` | /work placeholder-03 | [Commons: Traditional Costume, National Museum of Ethiopia 03](https://commons.wikimedia.org/wiki/File:Traditional_Costume_-_National_Museum_of_Ethiopia_-_Addis_Ababa_-_Ethiopia_-_03_(8743136173).jpg) | Adam Jones | CC BY-SA 2.0 | LICENSED PLACEHOLDER |
| `app/[locale]/opengraph-image.tsx` (generated PNG) | OpenGraph/social cards | Typographic, generated at request time (no photograph) | n/a — no photography | n/a | UNCLEARED |

### Outstanding on the story photographs and the portrait

Seven files arrived on 2026-08-31 with no source or photographer stated. They are
generic city views and a studio headshot, and several carry the signs of stock
libraries, so they are recorded UNCLEARED and none of them can launch until
somebody says where each came from and on what terms.

The client asked for no caption under them, and the page now honours that.
**Hiding the line does not settle the licence.** Attribution and permission are
separate things: a picture that needs attribution cannot simply have its credit
switched off, so if any of these turn out to be CC-licensed their captions have
to come back, and if any turn out to be unlicensed stock they have to come down.

### Outstanding on the hero

`hero.jpg` is her own photograph, not a placeholder, so rule 2 is satisfied
and it can stay up. Two things still block launch on it:

1. **The photographer's name.** It reads as a professional shoot, and in that
   case the copyright sits with whoever took it, not with her. `content/hero.ts`
   carries `credit: 'TODO'` until this is known.
2. **A higher-resolution original.** The file is 941x1672. A large desktop
   stretches it about twice over and it renders soft. 2000px or more on the
   long edge would fix it.

## Retired

| File | Was used on | Note |
| --- | --- | --- |
| `public/images/placeholders/hero.svg` | Home hero | Generated SVG, replaced by licensed stock placeholder |
| `public/images/portraits/hero-placeholder.jpg` | Home hero | Commons "Detail, Traditional Ethiopian Garment", A. Davey, CC BY 2.0. Deleted in be6f659 when the client supplied her own portrait. |
| `public/images/story/sodo.jpg` (old) | /story (Wolaita Sodo) | Commons "Wolaita Sodo", Bernard Gagnon, CC BY-SA 3.0. Replaced by the client's own file. |
| `public/images/story/nairobi.jpg` (old) | /story (Nairobi) | Commons, Timothy A. Gonsalves, CC BY-SA 4.0. Replaced by the client's own file. |
| `public/images/story/kampala.jpg` (old) | /story (Kampala) | Commons "Kampala skyline", Todd Huffman, CC BY 2.0. Replaced by the client's own file. |
| `public/images/story/rome.jpg` (old) | /story (Rome) | Commons "Sant'Angelo bridge", Jebulon, CC0. Replaced by the client's own file. |
| `public/images/story/stages-milan.jpg` | /story (the stages) | Commons "Galleria Vittorio Emanuele", Maurizio Moro5153, CC BY-SA 4.0. Deleted; the chapter now uses stages.jpg. |
| `public/images/story/milan.jpg` | never published | A 270x148 Shutterstock comp with the watermark still across it. Deleted rather than committed: publishing it would have been a straight copyright breach. |
| `public/images/placeholders/collection-01-a/b.svg` | /work placeholder-01 | Generated SVG, replaced |
| `public/images/placeholders/collection-02-a/b.svg` | /work placeholder-02 | Generated SVG, replaced |
| `public/images/placeholders/collection-03-a/b.svg` | /work placeholder-03 | Generated SVG, replaced by the museum-costume images |

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

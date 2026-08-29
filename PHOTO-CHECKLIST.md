# Photo checklist

Every photograph the site needs, in priority order. **18 images filled**
gives a complete site with nothing borrowed; the first 3 alone transform it.

Save each into the folder named, then tell me and I will place it, size it,
write the alt text and register the credit. Folder guidance lives in
[`public/images/portraits/README.md`](public/images/portraits/README.md).

---

## READ THIS FIRST: photos from social media

Downloading a photo from her Instagram or Facebook **does not grant the right
to publish it**. Copyright belongs to whoever pressed the shutter, not to the
person in the frame and not to the account that posted it.

For each photo you pull, sort it into one of these:

| Situation | Can we publish it? |
| --- | --- |
| She took it, or a friend/family did | Yes. Credit `Personal archive`. |
| A photographer shot it for her, and she has the files or a release | Yes, credit them by name. |
| A photographer shot it and we do not know the terms | **Ask her first.** She usually knows who shot it. |
| Reposted from a magazine, brand or event page | **No**, unless that outlet grants permission. |

Runway and editorial photography is the risky category, and it is exactly the
category this site needs most. A photographer complaint on her own website
would embarrass her, so it is worth one conversation up front. If she cannot
place a photo, tell me and I will leave that slot as a marked placeholder
rather than publish it.

---

## Priority 1 — the three that change everything (3 photos)

> **The hero already has her real photograph** - the one supplied on
> 2026-08-29. Two things are still needed on it: **who took it**, and a
> **higher-resolution original** (it is 941px and renders soft on a large
> desktop). Everything else in this list is still borrowed stock.

| # | What | Where it appears | Notes |
| --- | --- | --- | --- |
| 1 | **Hero portrait** | Fills the whole home page screen | **Portrait, not landscape** - tall, like the one already on the site. Her face in the upper third. Nothing important in the bottom half or at the far left; the type sits there. **2000px+ on the long edge** - the current file is 941px and goes soft on a large screen. |
| 2 | **Masthead portrait** | Small circle beside her name in the header, every page | Square crop of her face, 256px+ |
| 3 | **Press portrait** | Press page, and the photo press download | Her best formal shot. Highest resolution available. |

---

## Priority 2 — her journey, the emotional core (6 photos)

One per chapter on `/story`. **Photos of her in each place** are far better
than scenery; landscape crops work best.

| # | Chapter | Ideal photo |
| --- | --- | --- |
| 4 | Wolaita Sodo | Her hometown, childhood, or her there as an adult |
| 5 | Nairobi | Her time in Kenya |
| 6 | Kampala | Her time in Uganda |
| 7 | Rome | Her in Rome, where she lives |
| 8 | Milan / London / Paris | Backstage or on the runway at any of the three |
| 9 | Addis Ababa | Her back in Ethiopia, or the institute |

If a chapter has no photo of her, a strong photo of the place still works.

---

## Priority 3 — the work (6+ photos)

`/work` currently holds **three collections, two photos each**. Real
collections can hold as many as you have.

| # | What | Notes |
| --- | --- | --- |
| 10-11 | Collection one: 2+ photos | First photo becomes the cover card |
| 12-13 | Collection two: 2+ photos | |
| 14-15 | Collection three: 2+ photos | |

For each collection I also need, in words: **its name, the year, the city it
showed in, and two or three sentences about it.** Photos alone leave the
titles reading "Collection one".

---

## Priority 4 — pages that have no photographs at all yet (3+ photos)

These three pages are currently text-only. Even one photo each lifts them.

| # | Page | Ideal photo |
| --- | --- | --- |
| 16 | **Peace** | The June 2019 One Peace Fashion show in Wolaita Sodo, or any One Peace event |
| 17 | **Institute** | The Da Mario's building, a classroom, or students working |
| 18 | **Contact** | Optional. A quieter portrait, or a detail shot |

---

## Also worth gathering (no fixed slot yet)

- **More One Peace Fashion editions.** The site can only evidence the June
  2019 show; photos from other editions, with the year and city, would let
  that section show a real run of events.
- **Her with the recognitions** (2016 Ghana, 2017 UN, 2019 Nigeria). A photo
  of a certificate or ceremony would help settle the details that could not be
  verified online.
- **A social sharing image**, 1200x630, for when the link is shared on
  WhatsApp or Facebook. Currently typographic; a photo would be stronger.

---

## The short version

If you can only get a handful, get these five:

1. Hero portrait (tall portrait, face in the upper third, 2000px+)
2. Masthead portrait (square, her face)
3. One real collection, with 2+ photos and its name, year and city
4. One photo of her in Wolaita Sodo
5. One photo from a One Peace Fashion show

That is enough to remove every borrowed image from the parts of the site
people look at first.

---

## How the hero is cropped

Worth knowing before choosing a replacement, because the same file is cropped
two different ways:

- **On a phone** the photograph fills the screen. Her face and hat sit clear at
  the top; from about 40% down the image is darkened so the white type can sit
  on it. So the lower half will be dark - do not pick a photo whose whole point
  is in the bottom half.
- **On a desktop** the frame is wide, so a tall portrait is cropped to a
  horizontal band pinned near the top of the file (`heroFocalPoint`, currently
  `50% 12%`). Her face needs to be in the upper third or it is cropped out.
- The left third carries her name and the two buttons on desktop.

If a photo she likes does not fit that, tell me: the focal point is one line in
`content/hero.ts` and I can move the crop to suit the picture.

---

## Technical notes for every photo

- **JPG**, at least 2000px on the long edge, quality about 80.
- One file per photo. The site makes every other size automatically, so no
  need for thumbnails or mobile versions.
- Lowercase filenames with dashes: `2019-wolaita-sodo-01.jpg`.
- Note **who took each photo** as you collect them. That one line per file is
  what makes the difference between publishable and not.

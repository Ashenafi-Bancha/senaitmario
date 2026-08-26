# Figma AI prompt — Dr. Senait Mario portfolio

Everything here is drawn from the built site, so a design made from it will
match the code. **Section 1 is the prompt to paste.** Sections 2–4 are
per-screen prompts for iterating, section 5 is how to work with Figma AI
effectively, and section 6 is the verified content — the only facts allowed
on screen.

---

## 1. THE MAIN PROMPT — paste this into Figma AI

Design a premium editorial portfolio website for **Dr. Senait Mario**, an
Ethiopian-Italian fashion designer, model, sociologist and UN Peace
Ambassador based in Rome, founder of Da Mario's Fashion and Technology
Institute in Addis Ababa. The audience is international fashion press,
galleries, event organisers and collaborators.

**Tone:** quiet luxury. Think Bottega Veneta, The Row, Zegna, Jacquemus,
Phaidon art books, the front matter of a fashion monthly. Restrained,
confident, image-led. Not a startup landing page, not a CV, not a template.
No bubbly shapes, no rounded cards, no drop shadows, no gradients, no emoji,
no corporate stock imagery.

**Colour — use exactly these, no others.**

Light theme (default):
- Background: #F0F4EE (pale green-tinged ivory)
- Primary text: #33241A (deep brown)
- Secondary text: #6B5644 (warm mid brown)
- Accent, for links and small labels: #7A4B24 (chestnut)
- Hairline rules and borders: #DDD8CB

Dark theme (an optional toggle in the header):
- Background: #101112
- Primary text: #F2EFE9
- Secondary text: #AFA89B
- Accent: #C89A6A (camel)
- Rules: #2A2B2D

Absolutely no yellow, gold, amber or ochre anywhere — the client has
rejected it. Colour here is structure, not decoration: the entire page
ground changes between sections, never just an accent.

**Typography — three roles, strictly separated.**
- Display: **Bodoni Moda**, a high-contrast Didone. Used very large, tight
  tracking (about -0.02em), tight leading (0.86–0.95). Carries her name and
  every page title.
- Body: **Alegreya Sans**, warm humanist sans, generous leading (1.6–1.75),
  line length capped around 60–70 characters.
- Utility: **IBM Plex Mono**, uppercase, very wide tracking (0.2–0.3em), tiny
  (10–12px). Used ONLY for metadata: section numbers, dates, cities, photo
  credits, labels, button text. This is what makes the page look designed
  rather than typed.
- Amharic and Wolayttatto Doonaa: **Noto Sans Ethiopic**, taller leading
  (1.85 body, 1.45 headings).

**Layout principles.**
- Page container max width 1152px, centred, 16–24px side padding.
- Hero and feature images break OUT of that container and bleed to the
  viewport edge. That asymmetry is the signature move.
- Every major section pairs a large photograph with a short text column,
  alternating which side the image sits on down the page.
- Number sections 01, 02, 03 in mono caps.
- Separate sections with a 1px hairline rule, never with boxes or cards.
- Whitespace should be generous but never empty. A screen must never contain
  only a heading. If a section has little to say, give it a bigger image, not
  more air.

**Screens to design, at desktop 1440px and mobile 375px:**
1. Home — full-bleed hero plus five numbered chapter spreads
2. Story — her journey as chaptered editorial spreads
3. Work — a collections index, and a collection detail page
4. The Colour Index — a grid of colour swatches; the signature page
5. Peace — advocacy, built around a large pull-quote
6. Institute — one short elegant page
7. Press — biography, recognitions, press coverage
8. Contact — a booking and enquiry form

**Header:** sticky, translucent, 1px bottom rule. Her name "Dr. Senait Mario"
in the display face at about 18px on the left, with room for a small circular
portrait beside it. Navigation on the right in mono caps at 11–12px. A
language selector and a light/dark toggle at the far right. Below 1024px the
navigation collapses to a MENU button opening a FULL-SCREEN overlay, links
set large in the display face (about 32px), stacked, separated by hairlines.

**Photography treatment:** images fill their frames edge to edge, no rounded
corners, no borders. Beneath each image sits a photographer credit in mono
caps at 9–10px in the secondary colour. Never place a credit over the
photograph. Runway photography belongs to photographers, so the credit is a
permanent design element — make it look intentional.

**Motion:** restrained. Text rises about 20px into place on load, staggered
roughly 100ms apart. Images settle out of a slight scale-up. Cards tilt a few
degrees toward the cursor. Links draw a hairline underline left to right on
hover. Nothing bounces, spins or flies.

**Accessibility:** body text holds at least 4.5:1 contrast against its
background. Interactive targets at least 44 by 44 pixels on mobile. Form
fields use 16px text so mobile browsers do not zoom on focus. Visible focus
rings in the accent colour.

---

## 2. PER-SCREEN PROMPTS — refine one screen at a time

**Home**

> A hero filling about 90% of viewport height, split into a text column on the
> left and a photograph on the right that bleeds off the right edge of the
> screen at full height. In the left column, stacked: "DR." in mono caps, then
> "Senait Mario" in Bodoni Moda at roughly 7.5vw with leading tight enough
> that the two words stack closely, then a short hairline rule, then one line
> of roles, then two lines of description, then "ROME, ITALY" and "BORN AND
> RAISED IN WOLAITA SODO, SOUTHERN ETHIOPIA" in mono caps.
> Below the hero, five chapter spreads separated by hairline rules. Each is a
> two-column row: a tall photograph on one side; on the other a mono-caps
> number, a large Bodoni title, two lines of description, and a mono-caps
> link. Alternate the image side each time.

**The Colour Index (the signature page)**

> A page explaining that she promotes Ethiopia through the colours of her
> collections. Open with the page title, then a large pull-quote in Bodoni
> with its citation beneath. Then a three-column grid of colour swatches. Each
> swatch is a square block of flat colour with a hairline border; beneath it
> the colour name in Bodoni, then the hex value and source collection in mono
> caps, then a category label, then one sentence on what the colour carries —
> a region, a fabric, a ceremony, a meaning.

**Work — index and detail**

> Index: page title, short intro, then a three-column grid of collection
> cards. Each card is a tall photograph, then the collection title in Bodoni,
> then year and city in mono caps.
> Detail: a back link in mono caps, the collection title very large, year and
> city, a paragraph of description, then a two-column gallery of large
> photographs each with a credit line, then a palette strip showing the
> collection colours as small squares with hex values.

**Story**

> Six full-height chapter spreads, one per place: Wolaita Sodo, Nairobi,
> Kampala, Rome, "Milan · London · Paris", Addis Ababa. Each has a mono-caps
> number and place name, a Bodoni chapter title, a paragraph, and a large
> photograph of that place beside it. Alternate image sides.

**Press**

> A short biography, then recognitions as rows: the year set large in Bodoni
> on the left, the award title and a line of detail on the right, separated by
> hairline rules. Then press coverage: article title as a link, with outlet
> and date beneath in mono caps.

**Contact**

> A single-column form at most 640px wide. Fields: Name, Organisation, Enquiry
> type (dropdown: Booking, Press, Partnership, Other), Message. Each field has
> a mono-caps label above it, a 1px border, no fill, no rounded corners, and is
> at least 44px tall. The submit button is a solid dark rectangle with
> mono-caps text.

---

## 3. WHAT TO EXPLICITLY FORBID

Paste these as constraints whenever the output drifts:

- No yellow, gold, amber or ochre in any element
- No rounded corners, drop shadows, gradients, glassmorphism or neon
- No bordered padded cards — use hairline rules and whitespace instead
- No emoji, no icon sets, no illustrations, no 3D
- No stock photographs of models standing in for her
- No section that is only a heading on an empty screen
- Do not place text on top of photographs
- Do not use any typeface beyond the three named

---

## 4. THE SIGNATURE IDEA TO PRESERVE

Her stated method is that she promotes Ethiopia through the colours she uses
in her collections. So on this site **colour is the structure, not the
decoration**: the whole page ground shifts as the visitor moves between
chapters, over about 800ms, and text, rules and focus rings all re-derive from
whichever colour is active. Today it runs on one ivory ground with an optional
black; when real collection photography arrives, each body of work will own a
palette lifted from its own garments. Any design must keep that idea legible —
do not reduce it to coloured accents on a white page.

---

## 5. HOW TO WORK WITH FIGMA AI ON THIS

1. **Start with section 1 alone.** Generate, then judge only whether the mood
   is right. Ignore details on the first pass.
2. **Then iterate one screen at a time** using section 2. Figma AI handles a
   single well-described screen far better than a whole site at once.
3. **Correct with constraints, not adjectives.** "Make it more premium" does
   almost nothing. "Increase the hero title to 7.5vw, tighten leading to 0.9,
   and bleed the image off the right edge" works.
4. **Repeat the hex values every time you regenerate.** It drifts back toward
   defaults otherwise.
5. **Ask for desktop and mobile as separate frames.** The mobile navigation in
   particular is a different design, not a squeezed version of the desktop.
6. **Feed it her real photographs the moment you have them.** The single
   biggest improvement available to this design is replacing placeholder
   imagery with her actual collections. No amount of layout work substitutes
   for it.
7. **Keep the credit lines in every mockup.** They are permanent, and layouts
   designed without them break when they are added.
8. **Export decisions, not pixels.** What the build needs from Figma is type
   scale, spacing rhythm and image proportion — the colours and fonts are
   already fixed in code.

---

## 6. VERIFIED CONTENT — the only facts allowed on screen

**This is a real living person.** Do not let Figma AI invent collection names,
award titles, statistics, client lists or quotes. Invented credentials on a
public figure's own website are the worst possible failure for this project.
Where a layout needs filler, label it visibly as placeholder.

**Identity.** Dr. Senait Mario. Fashion designer, model, sociologist, UN Peace
Ambassador. Founder and CEO of Da Mario's Fashion and Technology Institute.
Based in Rome, Italy. Born and raised in Wolaita Sodo, southern Ethiopia.
Italian citizen, Ethiopian by birth.

**The journey.** Born and raised in Wolaita Sodo. Trained as a sociologist.
Left Ethiopia around 2009. Lived in Kenya, then Uganda. Settled in Rome. As of
2019 was pursuing a master's in Agricultural Science. Her work has been
presented on the fashion stages of Milan, London and Paris. In 2024 she
founded her institute in Addis Ababa.

**Her real published words** — use these, always with the source shown:

- "We can promote peace and unity through fashion" — Nigerian Tribune, 2019
- "I promote Ethiopia through the colors I use in my fashion collections" —
  Addis Standard, 2019
- "My target is to promote Ethiopia in fashion industry and at the same time
  to bring investments to Ethiopia so as to help youth empowerment." — Addis
  Standard, 2019

**Advocacy.** She organises the African Fashion Expo and the Fashion for Peace
/ One Peace Fashion Show. In June 2019 she staged a peace fashion show in
Wolaita Sodo alongside the regional cultural festival, featuring the work of
Ethiopian designers, attended by Ethiopia's State Minister of Culture and
Tourism and the vice-president of the southern regional state.

**The institute.** Da Mario's Fashion and Technology Institute, founded 2024,
Bole Sub City, Addis Ababa. Teaches fashion design, modeling, cosmetology,
nail technology, information technology and professional security officer
training.

**Recognitions — present these as unconfirmed.** 2016, recognised among the
Top 40 Women of Africa at the MICE award in Ghana. 2017, named a UN Peace
Ambassador. 2019, awarded an honorary doctorate in Nigeria for work promoting
African culture. None has been independently verified; all trace to her own
account in a single 2019 article. Always present the doctorate as honorary.
Do not design a badge, seal or trust-marker around any of them.

**Languages.** English, Amharic and Italian, plus Wolayttatto Doonaa — her
mother tongue — which currently shows a courteous "translation in progress"
page rather than a machine-translated biography.

**Still missing, so design around clearly-marked placeholders:** her portrait,
all collection photography, collection names and years, the real colour
swatches, her contact email and social handles.

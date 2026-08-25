import type { Collection } from './types';

/**
 * TODO — no collection data yet. These three placeholders exist so the
 * layouts can be reviewed; every field is provisional. Real entries need:
 * title, year, city, palette (extracted from photography), images with
 * photographer credit + clearance in RIGHTS.md, and a description.
 */
export const collections: Collection[] = [
  {
    slug: 'placeholder-01',
    title: 'TODO — Collection one',
    year: 'TODO',
    city: 'TODO',
    paletteId: 'evergreen',
    descriptionKey: 'collections.placeholder-01.description',
    // Licensed stock placeholders (Wikimedia Commons, credited) — NOT her
    // work; to be replaced with real collection photography. See RIGHTS.md.
    images: [
      {
        src: '/images/collections/weaver-pit-loom.jpg',
        width: 1280,
        height: 1811,
        alt: 'Weaver at a traditional Ethiopian loom — placeholder image, not from this collection',
        credit: 'Thomas Fuhrmann, CC BY-SA 4.0, via Wikimedia Commons',
        usageNote: 'Placeholder — not from Senait Mario’s collections',
      },
      {
        src: '/images/collections/weaving-fibres.jpg',
        width: 1280,
        height: 887,
        alt: 'Bundled weaving fibres in Adigrat, Ethiopia — placeholder image, not from this collection',
        credit: 'Rod Waddington, CC BY-SA 2.0, via Wikimedia Commons',
        usageNote: 'Placeholder — not from Senait Mario’s collections',
      },
    ],
  },
  {
    slug: 'placeholder-02',
    title: 'TODO — Collection two',
    year: 'TODO',
    city: 'TODO',
    paletteId: 'evergreen-deep',
    descriptionKey: 'collections.placeholder-02.description',
    images: [
      {
        src: '/images/collections/loom-blue-warp.jpg',
        width: 1280,
        height: 853,
        alt: 'Loom threaded with blue and white warp, Ethiopia — placeholder image, not from this collection',
        credit: 'Thomas Fuhrmann, CC BY-SA 4.0, via Wikimedia Commons',
        usageNote: 'Placeholder — not from Senait Mario’s collections',
      },
      {
        src: '/images/collections/shiro-meda-market.jpg',
        width: 1600,
        height: 900,
        alt: 'Traditional dress stalls at Shiro Meda clothing market, Addis Ababa — placeholder image, not from this collection',
        credit: 'Lucy Shaw, CC BY-SA 4.0, via Wikimedia Commons',
        usageNote: 'Placeholder — not from Senait Mario’s collections',
      },
    ],
  },
  {
    slug: 'placeholder-03',
    title: 'TODO — Collection three',
    year: 'TODO',
    city: 'TODO',
    paletteId: 'evergreen-light',
    descriptionKey: 'collections.placeholder-03.description',
    images: [
      {
        src: '/images/placeholders/collection-03-a.svg',
        width: 1200,
        height: 1600,
        alt: 'Placeholder — collection photography pending',
        credit: 'TODO',
      },
      {
        src: '/images/placeholders/collection-03-b.svg',
        width: 1200,
        height: 1600,
        alt: 'Placeholder — collection photography pending',
        credit: 'TODO',
      },
    ],
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}

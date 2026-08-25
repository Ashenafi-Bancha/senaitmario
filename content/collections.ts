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
    images: [
      {
        src: '/images/placeholders/collection-01-a.svg',
        width: 1200,
        height: 1600,
        alt: 'Placeholder — collection photography pending',
        credit: 'TODO',
      },
      {
        src: '/images/placeholders/collection-01-b.svg',
        width: 1200,
        height: 1600,
        alt: 'Placeholder — collection photography pending',
        credit: 'TODO',
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
        src: '/images/placeholders/collection-02-a.svg',
        width: 1200,
        height: 1600,
        alt: 'Placeholder — collection photography pending',
        credit: 'TODO',
      },
      {
        src: '/images/placeholders/collection-02-b.svg',
        width: 1200,
        height: 1600,
        alt: 'Placeholder — collection photography pending',
        credit: 'TODO',
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

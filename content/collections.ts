import type { Collection, ImageAsset } from './types';

/**
 * TODO — no collection data yet. These three placeholders exist so the
 * layouts can be reviewed; every field is provisional. Real entries need:
 * title, year, city, palette (extracted from photography), images with
 * photographer credit + clearance in RIGHTS.md, and a description.
 */
/**
 * A single photograph of her work, shown on the home page in the first spread
 * below the hero.
 *
 * It is deliberately NOT attached to a collection. Which collection it belongs
 * to has not been confirmed, and inventing a season for a real designer is the
 * one mistake this site must not make. When the collections are settled this
 * moves into one of them.
 *
 * "dinguze" is carried over from the client's own filename. It is not treated
 * as a collection name anywhere a visitor can see.
 *
 * TODO - PHOTOGRAPHER. Runway photography usually belongs to whoever shot the
 * show rather than to the designer. RIGHTS.md lists this UNCLEARED.
 */
export const featuredWorkImage: ImageAsset = {
  src: '/images/collections/runway-dinguze.jpg',
  width: 1296,
  height: 1214,
  alt: 'A model on the runway in a woven off-the-shoulder dress banded in red, black and gold, with a pale crocheted yoke',
  credit: 'TODO',
  showCredit: false,
};

/** Her face and the garment both sit high in the frame. */
export const featuredWorkFocalPoint = '50% 20%';

/**
 * Empty on purpose.
 *
 * There were three placeholder collections here so the layout could be judged.
 * The real photographs have arrived but without a show or a season attached to
 * any of them, and a name, a year and a city are not details to guess at, so
 * there are no collections rather than invented ones. The work page shows
 * individual pieces instead - see content/pieces.ts.
 *
 * When she confirms them, entries go back here and the work page can group the
 * pieces under headings.
 */
export const collections: Collection[] = [];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}

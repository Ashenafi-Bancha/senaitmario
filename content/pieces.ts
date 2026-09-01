import type { ImageAsset } from './types';

/**
 * ── THE WORK ────────────────────────────────────────────────────────────
 *
 * Individual pieces, not collections.
 *
 * The photographs were gathered from her social media and arrived without
 * telling us which show or season any of them belongs to. A name, a year and
 * a city cannot be guessed, and a season invented for a real designer is the
 * one mistake this site must not make - so there are no collections here.
 * Each piece stands on its own and says only what can be seen in the frame.
 *
 * When she confirms the collections, these group up: add a `collection` field
 * and the work page can show them under headings instead of as one index.
 *
 * `kind` is the only claim made about a picture, and it is a claim about the
 * PICTURE rather than the garment: whether it is a drawing, the garment on its
 * own, the garment worn, or a runway frame. That much is visible and safe.
 *
 * TODO - PHOTOGRAPHERS for all of them. RIGHTS.md lists them UNCLEARED.
 *
 * TODO - RESOLUTION. These run 526-799px wide, which is what a social media
 * download gives you. They hold at the size the index shows them and would not
 * survive being blown up; originals would.
 */
export type PieceKind = 'illustration' | 'garment' | 'worn' | 'runway';

export interface Piece {
  id: string;
  kind: PieceKind;
  image: ImageAsset;
}

export const pieces: Piece[] = [
  {
    id: 'gown-ruffled',
    kind: 'worn',
    image: {
      src: '/images/collections/wolaita-dinguza.jpg',
      width: 540,
      height: 960,
      alt: 'A model in a structured jacket and floor-length skirt, both banded in red, black and gold, with a deep front slit and a ruffled train',
      credit: 'TODO',
      showCredit: false,
    },
  },
  {
    id: 'illustration-banded',
    kind: 'illustration',
    image: {
      src: '/images/collections/wolaita-dinguza-2.jpg',
      width: 526,
      height: 700,
      alt: 'A design drawing of three looks in red, black and gold banded cloth: a tiered short dress, a column gown with a draped shoulder, and a high-necked gown',
      credit: 'TODO',
      showCredit: false,
    },
  },
  {
    id: 'blazer-dress',
    kind: 'garment',
    image: {
      src: '/images/collections/collection-4.jpg',
      width: 678,
      height: 960,
      alt: 'A belted blazer dress banded in red, black and gold, with a black shawl lapel',
      credit: 'TODO',
      showCredit: false,
    },
  },
  {
    id: 'blazer-portrait',
    kind: 'worn',
    image: {
      src: '/images/collections/senait-wolaita.jpg',
      width: 638,
      height: 960,
      alt: 'The banded blazer dress worn, photographed indoors against a chandelier',
      credit: 'TODO',
      showCredit: false,
    },
  },
  {
    id: 'runway-woven',
    kind: 'runway',
    image: {
      src: '/images/collections/runway-dinguze.jpg',
      width: 1296,
      height: 1214,
      alt: 'A model on the runway in a woven off-the-shoulder dress banded in red, black and gold, with a pale crocheted yoke',
      credit: 'TODO',
      showCredit: false,
    },
  },
  {
    id: 'coat-cross',
    kind: 'garment',
    image: {
      src: '/images/collections/collection-3.jpg',
      width: 526,
      height: 789,
      alt: 'A belted coat dress in red, black and gold bands, with a cross motif worked into the hem',
      credit: 'TODO',
      showCredit: false,
    },
  },
  {
    id: 'dress-cross',
    kind: 'garment',
    image: {
      src: '/images/collections/collection-2.jpg',
      width: 526,
      height: 789,
      alt: 'A sleeveless dress with a full skirt in red, black and gold bands, with a cross motif worked into the hem',
      credit: 'TODO',
      showCredit: false,
    },
  },
  {
    id: 'blazer-dress-worn',
    kind: 'worn',
    image: {
      src: '/images/collections/collection-5.jpg',
      width: 799,
      height: 1063,
      alt: 'The banded blazer dress worn outdoors in evening light',
      credit: 'TODO',
      showCredit: false,
    },
  },
  {
    id: 'illustration-lilac',
    kind: 'illustration',
    image: {
      src: '/images/collections/collection-1.jpg',
      width: 526,
      height: 701,
      alt: 'A design drawing of three looks in cream, trimmed with a lilac woven band: a flared short dress, a draped jumpsuit, and a one-shouldered gown',
      credit: 'TODO',
      showCredit: false,
    },
  },
  {
    id: 'kaftan-blue-trim',
    kind: 'worn',
    image: {
      src: '/images/collections/kaftan-blue-trim.jpg',
      width: 752,
      height: 960,
      alt: 'A white full-length kaftan with wide blue embroidered panels down each side',
      credit: 'TODO',
      showCredit: false,
    },
  },
  {
    id: 'white-tiered',
    kind: 'worn',
    image: {
      src: '/images/collections/collection-6.jpg',
      width: 590,
      height: 590,
      alt: 'A white tiered dress with a crocheted panel through the bodice and waist',
      credit: 'TODO',
      showCredit: false,
    },
  },
];

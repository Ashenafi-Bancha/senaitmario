import type { ImageAsset } from './types';

/**
 * Photographs of her that are not the hero.
 *
 * They live here rather than in hero.ts so a page can use one directly without
 * implying it belongs to the hero. Each records its own focal point, because
 * every one of them is a tall portrait and the frames that use them are wide:
 * cropping from the middle - the browser default - takes the waist and loses
 * the face.
 *
 * TODO - PHOTOGRAPHER for both. Supplied by the client on 2026-08-31 with no
 * source stated; RIGHTS.md lists them UNCLEARED.
 */
export interface Portrait {
  image: ImageAsset;
  focalPoint: string;
}

/** Her and a child in matching waistcoats and ties, in her own cloth. */
export const portraitWithChild: Portrait = {
  image: {
    src: '/images/portraits/hero-wolaita.jpg',
    width: 1022,
    height: 1539,
    alt: 'Dr. Senait Mario walking with a child, both in matching waistcoats and ties woven in red, gold and black',
    credit: 'TODO',
    showCredit: false,
  },
  // Her face sits high in the frame and the child is lower left, so a wide
  // crop has to be pinned near the top to keep her.
  focalPoint: '55% 18%',
};

/**
 * Lakeside at sunset. Not placed on any page yet: it is a quieter picture than
 * the others and the client has not said where it belongs.
 */
export const portraitLakeside: Portrait = {
  image: {
    src: '/images/portraits/hero-lake.jpg',
    width: 1179,
    height: 1334,
    alt: 'Dr. Senait Mario walking the shore of a lake at sunset, swans on the water beside her',
    credit: 'TODO',
    showCredit: false,
  },
  focalPoint: '38% 26%',
};

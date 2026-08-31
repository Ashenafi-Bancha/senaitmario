import type { ImageAsset } from './types';

/**
 * ── THE HOME HERO ───────────────────────────────────────────────────────
 *
 * The hero holds a set of photographs rather than one. They cross-fade
 * slowly, a third of a minute each, and the fade is pure CSS - there is no
 * JavaScript behind it, which matters because the home page runs close to
 * the bundle budget.
 *
 * To change the hero, edit this list. The FIRST entry is the one that loads
 * first and is what a visitor sees before anything fades, so it should be the
 * strongest picture. It is also the one the browser treats as the page's main
 * image for loading priority.
 *
 * Adding a fourth is a one-line change here; the fade timing adapts to the
 * count through --hero-frames in globals.css, which has to be kept in step.
 *
 * TODO - PHOTOGRAPHERS. Every one of these carries `credit: 'TODO'`. They read
 * as professional shoots, and in that case the copyright sits with whoever
 * took them rather than with her. RIGHTS.md lists them all as UNCLEARED.
 *
 * TODO - RESOLUTION. All three are around 1000-1200px wide. A large desktop
 * stretches the hero past that, which softens them. Anything 2000px or wider
 * on the long edge would render sharp.
 */
export interface HeroPhoto {
  image: ImageAsset;
  /**
   * Which part of the photograph must stay in frame.
   *
   * The hero fills the screen, so a tall portrait is cropped hard on a wide
   * desktop, and cropping from the middle - the browser default - cuts the
   * subject off at the shoulders. The second number pins the crop: smaller
   * keeps more of the top, larger keeps more of the bottom.
   */
  focalPoint: string;
}

export const heroPhotos: HeroPhoto[] = [
  {
    image: {
      src: '/images/portraits/hero.jpg',
      width: 941,
      height: 1672,
      alt: 'Dr. Senait Mario in a sequinned ensemble and a wide-brimmed hat',
      credit: 'TODO',
      // The hero frames carry no caption; a line that named one photographer
      // while a different picture was showing would be worse than none.
      showCredit: false,
    },
    focalPoint: '50% 12%',
  },
  {
    image: {
      src: '/images/portraits/hero-wolaita.jpg',
      width: 1022,
      height: 1539,
      alt: 'Dr. Senait Mario walking with a child, both in matching waistcoats and ties woven in red, gold and black',
      credit: 'TODO',
      showCredit: false,
    },
    // Her face sits high in this frame; the child is lower left and is lost on
    // a wide crop, which is why this one reads best on a phone.
    focalPoint: '55% 12%',
  },
  {
    image: {
      src: '/images/portraits/hero-lake.jpg',
      width: 1179,
      height: 1334,
      alt: 'Dr. Senait Mario walking the shore of a lake at sunset, swans on the water beside her',
      credit: 'TODO',
      showCredit: false,
    },
    // She stands left of centre and lower in this frame than the other two.
    focalPoint: '38% 26%',
  },
];

/** The picture that loads first and carries the page. */
export const heroImage = heroPhotos[0]!.image;
export const heroFocalPoint = heroPhotos[0]!.focalPoint;

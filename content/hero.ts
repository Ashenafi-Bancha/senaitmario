import type { ImageAsset } from './types';

/**
 * ── THE HOME HERO ───────────────────────────────────────────────────────
 *
 * One photograph, full bleed. An earlier version cross-faded three; the client
 * asked for the single picture back.
 *
 * Her other photographs are in content/portraits.ts and are placed on the page
 * directly rather than cycled here.
 *
 * TODO - PHOTOGRAPHER. RIGHTS.md lists this UNCLEARED.
 *
 * TODO - RESOLUTION. This file is 941px wide; a large desktop stretches the
 * hero to roughly twice that, which softens it. 2000px or wider on the long
 * edge would render sharp.
 */
export const heroImage: ImageAsset = {
  src: '/images/portraits/hero.jpg',
  width: 941,
  height: 1672,
  alt: 'Dr. Senait Mario in a sequinned ensemble and a wide-brimmed hat',
  credit: 'TODO',
  // The hero carries no caption on the page; the credit lives in RIGHTS.md.
  showCredit: false,
};

/**
 * Which part of the photograph must stay in frame.
 *
 * The hero fills the screen, so a tall portrait is cropped hard on a wide
 * desktop, and cropping from the middle - the browser default - cut this
 * portrait off at the shoulders and lost her face entirely. Smaller keeps
 * more of the top, larger keeps more of the bottom.
 */
export const heroFocalPoint = '50% 12%';

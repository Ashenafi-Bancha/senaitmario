import type { ImageAsset } from './types';

/**
 * ── HER HERO PHOTOGRAPH ─────────────────────────────────────────────────
 *
 * This is the single big image that fills the screen on the home page. It is
 * the first thing anyone sees, so it should be her strongest portrait.
 *
 * TO REPLACE IT:
 *   1. Save the photograph as  public/images/portraits/hero.jpg
 *   2. Point `heroImage.src` at '/images/portraits/hero.jpg'
 *   3. Set `width` and `height` to the file's real pixel dimensions
 *   4. Write a real `alt` and the photographer's name in `credit`
 *   5. If the photograph is DARK, change `heroTone` to 'dark'
 *   6. Add a row for it in RIGHTS.md
 *
 * The path starts at '/images/...', not '/public/images/...' - that is how
 * files inside public/ are addressed.
 *
 * WHAT MAKES A GOOD HERO HERE:
 *  - Landscape or square crops work best; a tall portrait gets cropped at the
 *    top and bottom on desktop, because the image fills the whole screen.
 *  - Leave some calm space on the LEFT of the frame. Her name and the button
 *    sit over that side, so a busy left edge fights the type.
 *  - At least 2000px on the long edge. Export as JPG at about quality 80;
 *    the site converts and resizes it for every device automatically.
 *  - Aim under 400 KB.
 */

/**
 * Is the left side of the photograph light or dark?
 *
 *  'light' - a bright photograph: her name is set in deep brown over a pale
 *            scrim. This is the current setting.
 *  'dark'  - a dark or moody photograph: her name flips to near-white over a
 *            darkened scrim.
 *
 * The scrim behind the type is deliberately strong enough that either
 * setting stays readable, so if you are unsure, try one and look at it.
 */
export const heroTone: 'light' | 'dark' = 'light';

/**
 * Her hero portrait, supplied by the client.
 *
 * TODO - CREDIT REQUIRED BEFORE LAUNCH. This looks like a professional
 * shoot, and the photographer owns the copyright, not the subject. Replace
 * 'TODO' below with the photographer's name once known, and add a row to
 * RIGHTS.md. Until then the site renders a visible warning in development.
 *
 * TODO - a higher-resolution original would help. This file is 941px wide;
 * on a large desktop the hero is stretched to roughly twice that, which
 * softens it. Anything 2000px or wider on the long edge would render sharp.
 */
export const heroImage: ImageAsset = {
  src: '/images/portraits/hero.jpg',
  width: 941,
  height: 1672,
  alt: 'Dr. Senait Mario in a sequinned ensemble and wide-brimmed hat',
  credit: 'TODO',
};

/**
 * Which part of the photograph must stay in frame.
 *
 * The hero fills the screen, so a tall portrait gets cropped hard on a wide
 * desktop. Cropping from the middle - the browser default - cut this
 * portrait off at the shoulders and lost her face completely. '50% 12%'
 * pins the crop near the top so her face survives at every screen shape.
 *
 * Adjust the second number if a future photograph sits differently: smaller
 * keeps more of the top, larger keeps more of the bottom.
 */
export const heroFocalPoint = '50% 12%';

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
 * TODO - replace with her real portrait. This is currently a licensed stock
 * photograph from Wikimedia Commons that does NOT depict her; it is a
 * placeholder so the layout can be judged. See RIGHTS.md.
 */
export const heroImage: ImageAsset = {
  src: '/images/collections/weaver-pit-loom.jpg',
  width: 1280,
  height: 1811,
  alt: 'Weaver at a traditional Ethiopian pit loom, placeholder image',
  credit: 'Thomas Fuhrmann, CC BY-SA 4.0, via Wikimedia Commons',
};

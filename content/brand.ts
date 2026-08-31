import type { ImageAsset } from './types';

/** How her name is set in the masthead, mobile menu and footer. */
export const brandName = 'Dr. Senait Mario';

/**
 * ── HER LOGO ────────────────────────────────────────────────────────────
 *
 * Save the file(s) in `public/images/brand/` and fill this in. Nothing else
 * needs to change: the header, the mobile menu and the footer all read from
 * here. Until it is set, those places show her name in the display face,
 * which is a perfectly good wordmark in the meantime.
 *
 * The site has a light theme and a dark one, so a single fixed-colour logo
 * will disappear against one of them. Two ways to handle that:
 *
 *  A. BEST — one SVG that uses `currentColor` for its shapes. It then inherits
 *     the site's text colour and is correct in both themes automatically.
 *     Set `src` only, and leave `srcDark` undefined.
 *
 *  B. Otherwise supply two files: a dark logo for the light theme (`src`) and
 *     a light logo for the dark theme (`srcDark`). The header swaps them when
 *     the visitor flips the theme.
 *
 * Use SVG if she has it. If only a raster file exists, use PNG with a
 * transparent background, at least 3x the height it will display at
 * (so 120px tall or more), never JPG — JPG cannot do transparency and will
 * show a white box around the logo.
 */
export interface BrandLogo {
  /** Path under /public, e.g. '/images/brand/logo.svg'. */
  src: string;
  /** Optional variant used when the dark theme is active. */
  srcDark?: string;
  /** The file's real pixel dimensions. Prevents layout shift while it loads. */
  width: number;
  height: number;
  /** Rendered height in the header, in px. Width scales to match. Default 32. */
  displayHeight?: number;
  /** Show her name beside the logo as well. Leave false for a logo that already contains her name. */
  showNameBeside?: boolean;
}

/**
 * TODO — set this once the client supplies the logo. Example:
 *
 *   export const brandLogo: BrandLogo | null = {
 *     src: '/images/brand/logo.svg',
 *     width: 512,
 *     height: 128,
 *     displayHeight: 30,
 *   };
 */
export const brandLogo: BrandLogo | null = null;

/**
 * Optional portrait shown beside the name in the header. Separate from the
 * logo: this is a photograph of her, the logo is her mark. Either, both or
 * neither can be set.
 *
 * Supplied by the client on 2026-08-31 as `senait_mario.jpg`. It is a
 * photograph, not a logo mark, so it belongs here rather than in `brandLogo`,
 * which is still unset.
 *
 * TODO - photographer and usage terms. It reads as a professional headshot,
 * and in that case the copyright sits with whoever took it. RIGHTS.md lists it
 * as UNCLEARED until that is answered.
 */
export const brandPortrait: ImageAsset | null = {
  /*
   * A square crop of her face, cut from senait_mario.jpg.
   *
   * The full portrait is nearly square, so `object-fit: cover` only trimmed a
   * fifth off the height and her face still sat small in a 36px circle -
   * repositioning could not fix that, because cover cannot zoom in. The crop
   * does. The full portrait stays in this folder for the press page, which
   * wants the whole frame.
   */
  src: '/images/brand/portrait-mark.jpg',
  width: 512,
  height: 512,
  alt: 'Dr. Senait Mario',
  credit: 'TODO',
  // The masthead crops it to a small circle; no caption belongs beside a
  // masthead portrait.
  showCredit: false,
};

/**
 * The mark file is already square and already centred on her face, so the
 * circle needs no repositioning. Kept as a knob in case the file is replaced
 * with one that does.
 */
export const brandPortraitFocalPoint = '50% 50%';

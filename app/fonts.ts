/**
 * Typography — all faces self-hosted and subset via next/font (files are
 * downloaded at build time, served from this origin, and subset per usage;
 * no runtime requests to Google). `font-display: swap` throughout.
 *
 * Faces are PROVISIONAL pending client/designer sign-off — see README.
 *  - Display: Jost (geometric sans in the Futura line). Replaced Bodoni Moda:
 *    a Didone's hairline strokes went faint at hero size over a photograph,
 *    and the client asked for a different face. Jost holds an even stroke at
 *    any size, which is what large tracked capitals need.
 *  - Body: Alegreya Sans (warm humanist)
 *  - Utility: IBM Plex Mono (captions, credits, dates, cities, attribution)
 *  - Amharic: Noto Sans Ethiopic, applied only on /am routes
 */
import {
  Alegreya_Sans,
  Jost,
  IBM_Plex_Mono,
  Noto_Sans_Ethiopic,
} from 'next/font/google';

export const displayFace = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-display-face',
});

export const bodyFace = Alegreya_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-body-face',
});

export const utilityFace = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-utility-face',
});

export const ethiopicFace = Noto_Sans_Ethiopic({
  subsets: ['ethiopic'],
  display: 'swap',
  variable: '--font-ethiopic-face',
});

/**
 * Typography — all faces self-hosted and subset via next/font (files are
 * downloaded at build time, served from this origin, and subset per usage;
 * no runtime requests to Google). `font-display: swap` throughout.
 *
 * Faces are PROVISIONAL pending client/designer sign-off — see README.
 *  - Display: Bodoni Moda (high-authority Didone, tight tracking at scale)
 *  - Body: Alegreya Sans (warm humanist)
 *  - Utility: IBM Plex Mono (captions, credits, dates, cities, attribution)
 *  - Amharic: Noto Sans Ethiopic, applied only on /am routes
 */
import {
  Alegreya_Sans,
  Bodoni_Moda,
  IBM_Plex_Mono,
  Noto_Sans_Ethiopic,
} from 'next/font/google';

export const displayFace = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  axes: ['opsz'],
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

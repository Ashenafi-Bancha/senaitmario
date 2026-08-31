import type { ImageAsset } from './types';

/**
 * The institute's own site, deployed by the client and confirmed reachable on
 * 2026-08-31 (title: "Da Mario's Fashion and Technology Institute - Addis
 * Ababa"). Setting this to null puts the outstanding-item note back in its
 * place on the institute page.
 */
export const instituteUrl: string | null = 'https://damariosfti.vercel.app/';

/**
 * Photography for the institute page.
 *
 * TODO - PHOTOGRAPHER. Supplied by the client on 2026-08-31 with no source
 * stated. RIGHTS.md lists it as UNCLEARED.
 */
export const instituteImage: ImageAsset | null = {
  src: '/images/institute/reception.jpg',
  width: 526,
  height: 701,
  alt: "The reception of Da Mario's Fashion and Technology Institute, the institute's name and mark on the wall behind the desk",
  credit: 'TODO',
  showCredit: false,
};

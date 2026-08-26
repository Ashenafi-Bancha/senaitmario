import type { ImageAsset } from './types';

/** How her name is set in the masthead and mobile menu. */
export const brandName = 'Dr. Senait Mario';

/**
 * Optional portrait shown beside the name in the header.
 *
 * TODO — set this to her real portrait once the client supplies one. It must
 * be a square-ish crop of her face (about 256×256 or larger), carry a proper
 * `credit`, and be registered in RIGHTS.md. Leave it `null` until then: a
 * stock face must never stand in for her.
 */
export const brandPortrait: ImageAsset | null = null;

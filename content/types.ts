/**
 * Typed content layer.
 *
 * These shapes are the contract a future headless CMS must satisfy — components
 * consume only these types, never raw data files, so swapping the source later
 * means replacing the exports of `content/*.ts` without touching components.
 */

/**
 * A colour theme owned by one body of work / one chapter.
 *
 * `ink` and `muted` MUST hold ≥ 4.5:1 contrast against `ground`, and `accent`
 * ≥ 4.5:1 (it is used for link text). This is enforced at build time by
 * `scripts/check-contrast.ts` — the build fails if any pair drops below AA.
 */
export interface Palette {
  id: string;
  /** Human label. Provisional palettes say so in the name. */
  name: string;
  /** Literal `true` until values are extracted from real collection photography. */
  provisional: boolean;
  /** Page background — the colour field itself. */
  ground: string;
  /** Primary text on ground. AA-enforced. */
  ink: string;
  /** Secondary text on ground (captions at body size). AA-enforced. */
  muted: string;
  /** Links, focus rings, active UI. AA-enforced (used as text). */
  accent: string;
  /** Borders and rules. Decorative — not contrast-gated. */
  line: string;
}

/**
 * Runway and editorial photography is almost always owned by the photographer,
 * not the designer. `credit` is mandatory on every image; CreditedImage renders
 * it visibly and shows a loud dev-mode warning when it is missing or TODO.
 * Every asset must also appear in RIGHTS.md with a clearance status.
 */
export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Photographer / rights-holder credit. Mandatory. `"TODO"` triggers a dev warning. */
  credit: string;
  /** Licensing or usage restriction notes, e.g. "editorial use only". */
  usageNote?: string;
  /**
   * Whether to print the credit beside the picture. Defaults to true, which is
   * the safe default: openly-licensed stock has to carry its attribution on the
   * page or the licence is breached.
   *
   * Set false only for a picture the client owns or has cleared, where the line
   * is a legal formality rather than a licence condition and the page reads
   * better without it. Turning it off never removes the credit from the data -
   * RIGHTS.md is the register, not the page.
   */
  showCredit?: boolean;
}

export interface Collection {
  slug: string;
  title: string;
  year: number | 'TODO';
  city: string;
  /** The palette this body of work owns — drives the colour field on its pages. */
  paletteId: string;
  images: ImageAsset[];
  /** Message key for the localised description. */
  descriptionKey: string;
}

/** What a swatch carries — a region, a fabric, a ceremony, a meaning. */
export type SwatchCarries = 'region' | 'fabric' | 'ceremony' | 'meaning';

export interface Swatch {
  id: string;
  hex: string;
  name: string;
  /** Which collection this colour was lifted from. */
  collectionSlug: string;
  carries: SwatchCarries;
  /** Message key for the short line on what the colour carries. */
  carriesKey: string;
}

export interface StoryChapter {
  id: string;
  /** Place name shown as the chapter heading, e.g. "Wolaita Sodo". */
  place: string;
  paletteId: string;
  /** Message keys — chapter body copy lives in messages/, not here. */
  titleKey: string;
  bodyKey: string;
  image?: ImageAsset;
}

export interface Recognition {
  year: number;
  /** Message key for the recognition title. */
  titleKey: string;
  /** Message key for context/detail. */
  detailKey: string;
  /**
   * True while the exact awarding body / full title is unconfirmed.
   * Rendered with a visible TODO marker until the client confirms.
   */
  needsConfirmation: boolean;
}

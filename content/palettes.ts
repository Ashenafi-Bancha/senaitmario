import type { Palette } from './types';

/**
 * CLIENT DIRECTION (2026-08): the pale green-tinged ivory is the default
 * ground on every page, with deep brown text; MODERN BLACK is the optional
 * theme the visitor can switch to from the header. No yellow anywhere.
 *
 * Still the single swap point: when real collection photography arrives,
 * per-collection palettes can be added here without touching components.
 * Every palette must keep `ink`, `muted` and `accent` at ≥ 4.5:1 against
 * `ground` — `npm run check:contrast` gates the build.
 */
export const palettes: Palette[] = [
  {
    id: 'ivory',
    name: 'Ivory — default (pale ground, deep brown ink)',
    provisional: true,
    ground: '#F0F4EE',
    ink: '#33241A',
    muted: '#6B5644',
    accent: '#7A4B24',
    line: '#DDD8CB',
  },
  {
    id: 'noir',
    name: 'Modern black — optional theme',
    provisional: true,
    ground: '#101112',
    ink: '#F2EFE9',
    muted: '#AFA89B',
    accent: '#C89A6A',
    line: '#2A2B2D',
  },
];

/** The palette the site opens on. */
export const defaultPaletteId = 'ivory';

/** The optional dark theme the visitor can switch to. */
export const noirPaletteId = 'noir';

export function getPalette(id: string): Palette {
  const palette = palettes.find((p) => p.id === id);
  if (!palette) {
    throw new Error(`Unknown palette id: ${id}`);
  }
  return palette;
}

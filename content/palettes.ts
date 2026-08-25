import type { Palette } from './types';

/**
 * ONE COLOUR — the site wears a single deep evergreen (client direction),
 * moving only through its own depths: the primary ground, a deeper night
 * green, and a pale green-tinged ivory. No second hue anywhere; accents are
 * mint/green so nothing reads as yellow.
 *
 * Still the single swap point: when real collection photography arrives and
 * per-collection palettes are extracted, they are added here (and `provisional`
 * flipped) without touching components. Every palette must keep `ink`, `muted`
 * and `accent` at ≥ 4.5:1 against `ground` — `npm run check:contrast` gates
 * the build.
 */
export const palettes: Palette[] = [
  {
    id: 'evergreen',
    name: 'Evergreen — primary (exact value TODO: confirm against collection photography)',
    provisional: true,
    ground: '#12352B',
    ink: '#F4F1E8',
    muted: '#A3C0B2',
    accent: '#A9D6C2',
    line: '#2E5648',
  },
  {
    id: 'evergreen-deep',
    name: 'Evergreen — deep (exact value TODO: confirm against collection photography)',
    provisional: true,
    ground: '#0B231C',
    ink: '#F1F4EC',
    muted: '#93B4A5',
    accent: '#A9D6C2',
    line: '#23453A',
  },
  {
    id: 'evergreen-light',
    name: 'Evergreen — pale (exact value TODO: confirm against collection photography)',
    provisional: true,
    ground: '#F0F4EE',
    ink: '#16281F',
    muted: '#4A6455',
    accent: '#1E5B41',
    line: '#D3DFD4',
  },
];

/** The palette the site opens on before any section claims the viewport. */
export const defaultPaletteId = 'evergreen';

export function getPalette(id: string): Palette {
  const palette = palettes.find((p) => p.id === id);
  if (!palette) {
    throw new Error(`Unknown palette id: ${id}`);
  }
  return palette;
}

import type { Swatch } from './types';

/**
 * The Colour Index — TODO: placeholder swatches until colours can be lifted
 * from real garments. Each real entry: the colour, a name, the collection it
 * comes from, and a short line on what it carries (a region, a fabric, a
 * ceremony, a meaning). The data model and interaction are final; only the
 * values are provisional.
 */
export const swatches: Swatch[] = [
  // Placeholder hexes stay inside the site's ivory/brown/black family until
  // real garment colours are lifted from photography.
  {
    id: 'placeholder-a',
    hex: '#33241A',
    name: 'TODO: swatch name',
    carries: 'region',
    carriesKey: 'swatches.placeholder-a.carries',
  },
  {
    id: 'placeholder-b',
    hex: '#C89A6A',
    name: 'TODO: swatch name',
    carries: 'ceremony',
    carriesKey: 'swatches.placeholder-b.carries',
  },
  {
    id: 'placeholder-c',
    hex: '#101112',
    name: 'TODO: swatch name',
    carries: 'fabric',
    carriesKey: 'swatches.placeholder-c.carries',
  },
  {
    id: 'placeholder-d',
    hex: '#6B5644',
    name: 'TODO: swatch name',
    carries: 'meaning',
    carriesKey: 'swatches.placeholder-d.carries',
  },
  {
    id: 'placeholder-e',
    hex: '#7A4B24',
    name: 'TODO: swatch name',
    carries: 'region',
    carriesKey: 'swatches.placeholder-e.carries',
  },
  {
    id: 'placeholder-f',
    hex: '#F0F4EE',
    // (ivory — matches the default ground)
    name: 'TODO: swatch name',
    carries: 'meaning',
    carriesKey: 'swatches.placeholder-f.carries',
  },
];

export function getSwatch(id: string): Swatch | undefined {
  return swatches.find((swatch) => swatch.id === id);
}

'use client';

import { useEffect } from 'react';
import { useTheme } from './ThemeProvider';

/**
 * Sets the palette for a whole route on mount — for pages that own a single
 * colour field rather than scrolling through several.
 */
export function RouteTheme({ paletteId }: { paletteId: string }) {
  const { setPaletteId } = useTheme();

  useEffect(() => {
    setPaletteId(paletteId);
  }, [paletteId, setPaletteId]);

  return null;
}

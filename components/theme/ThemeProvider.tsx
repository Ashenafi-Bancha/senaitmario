'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { getPalette } from '@/content/palettes';

interface ThemeContextValue {
  activePaletteId: string;
  setPaletteId: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Holds the active palette and writes its tokens onto <html>. The registered
 * custom properties in globals.css do the actual animation — this component
 * only swaps values.
 */
export function ThemeProvider({
  initialPaletteId,
  children,
}: {
  initialPaletteId: string;
  children: ReactNode;
}) {
  const [activePaletteId, setPaletteId] = useState(initialPaletteId);

  useEffect(() => {
    const palette = getPalette(activePaletteId);
    const root = document.documentElement;
    root.style.setProperty('--ground', palette.ground);
    root.style.setProperty('--ink', palette.ink);
    root.style.setProperty('--muted', palette.muted);
    root.style.setProperty('--accent', palette.accent);
    root.style.setProperty('--line', palette.line);
    root.dataset.palette = activePaletteId;
  }, [activePaletteId]);

  const value = useMemo(
    () => ({ activePaletteId, setPaletteId }),
    [activePaletteId],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside <ThemeProvider>');
  }
  return context;
}

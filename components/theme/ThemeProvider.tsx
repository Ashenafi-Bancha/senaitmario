'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { getPalette, noirPaletteId } from '@/content/palettes';

type ThemeMode = 'default' | 'noir';

const MODE_STORAGE_KEY = 'senait-theme-mode';

interface ThemeContextValue {
  activePaletteId: string;
  setPaletteId: (id: string) => void;
  mode: ThemeMode;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Holds the active palette and writes its tokens onto <html>. The registered
 * custom properties in globals.css do the actual animation — this component
 * only swaps values.
 *
 * Two layers: sections/routes declare palettes as before (the colour-field
 * machinery, kept for when per-collection palettes arrive), and the visitor
 * can switch the whole site to the MODERN BLACK theme. While noir is active
 * it wins over section palettes; the choice persists in localStorage.
 */
export function ThemeProvider({
  initialPaletteId,
  children,
}: {
  initialPaletteId: string;
  children: ReactNode;
}) {
  const [activePaletteId, setPaletteId] = useState(initialPaletteId);
  const [mode, setMode] = useState<ThemeMode>('default');

  useEffect(() => {
    try {
      if (window.localStorage.getItem(MODE_STORAGE_KEY) === 'noir') {
        setMode('noir');
      }
    } catch {
      // Storage unavailable (privacy mode) — stay on the default theme.
    }
  }, []);

  useEffect(() => {
    const palette = getPalette(mode === 'noir' ? noirPaletteId : activePaletteId);
    const root = document.documentElement;
    root.style.setProperty('--ground', palette.ground);
    root.style.setProperty('--ink', palette.ink);
    root.style.setProperty('--muted', palette.muted);
    root.style.setProperty('--accent', palette.accent);
    root.style.setProperty('--line', palette.line);
    root.dataset.palette = palette.id;
    root.dataset.themeMode = mode;
  }, [activePaletteId, mode]);

  const value = useMemo(
    () => ({
      activePaletteId,
      setPaletteId,
      mode,
      toggleMode: () =>
        setMode((current) => {
          const next: ThemeMode = current === 'noir' ? 'default' : 'noir';
          try {
            window.localStorage.setItem(MODE_STORAGE_KEY, next);
          } catch {
            // Storage unavailable — the choice just won't persist.
          }
          return next;
        }),
    }),
    [activePaletteId, mode],
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

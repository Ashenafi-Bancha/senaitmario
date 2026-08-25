'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { useTheme } from './ThemeProvider';

/**
 * A section that owns a palette. When it crosses the band around the viewport
 * centre, its palette becomes the page's active theme and the whole colour
 * field transitions.
 */
export function ThemeSection({
  paletteId,
  children,
  className,
  id,
  labelledBy,
}: {
  paletteId: string;
  children: ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { setPaletteId } = useTheme();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setPaletteId(paletteId);
        }
      },
      // A thin band around the viewport centre: the section that holds the
      // centre owns the theme, so the flip point feels deliberate.
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [paletteId, setPaletteId]);

  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={labelledBy}
      data-palette={paletteId}
      className={className}
    >
      {children}
    </section>
  );
}

'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Scroll reveal. Framer Motion was cut here: its sync core pushed /work and
 * /colour past the 140 KB initial-JS budget, and an IntersectionObserver plus
 * a CSS transition does the same job for ~1 KB. The transition styles live in
 * globals.css behind `@media (scripting: enabled)` — with JS disabled nothing
 * is ever hidden — and reveals are disabled entirely under reduced motion
 * (unlike the colour field, which changes instantly but always changes).
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.revealed = 'true';
          observer.disconnect();
        }
      },
      { rootMargin: '-10% 0px' },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

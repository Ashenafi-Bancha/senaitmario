'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Scroll reveal via IntersectionObserver + CSS (Framer Motion was cut: its
 * sync core broke the 140 KB initial-JS budget and this does the same job for
 * ~1 KB).
 *
 * Fail-safe by construction: the hidden state is applied by JS at mount
 * (`data-reveal-armed`), never by a base stylesheet rule, so no-JS, no-CSS or
 * a crash all leave the copy readable. A watchdog reveals anything the
 * observer has not reported on, so content can never stay stuck invisible.
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

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const reveal = () => {
      element.dataset.revealed = 'true';
    };

    // Arm (hide) only now that we know we can reveal again.
    element.dataset.revealArmed = 'true';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { rootMargin: '-10% 0px' },
    );
    observer.observe(element);

    // Watchdog: whatever happens, nothing stays hidden.
    const watchdog = window.setTimeout(reveal, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(watchdog);
    };
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

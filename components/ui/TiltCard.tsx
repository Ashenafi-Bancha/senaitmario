'use client';

import { useRef, type PointerEvent, type ReactNode } from 'react';

/**
 * Subtle 3D tilt that follows the pointer — a few degrees of perspective, the
 * premium kind of motion, not a gimmick. Mouse only (touch scrolling stays
 * untouched) and inert under reduced motion.
 */
export function TiltCard({
  children,
  className,
  max = 6,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const element = ref.current;
    if (!element || event.pointerType !== 'mouse') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    element.style.transform = `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg)`;
  }

  function onPointerLeave() {
    const element = ref.current;
    if (element) element.style.transform = '';
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`tilt ${className ?? ''}`}
    >
      {children}
    </div>
  );
}

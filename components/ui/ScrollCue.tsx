'use client';

import { useTranslations } from 'next-intl';

/**
 * The circular chevron at the foot of the hero. Scrolls to the first chapter
 * rather than jumping, and honours reduced motion by jumping instantly.
 */
export function ScrollCue({ targetId }: { targetId: string }) {
  const t = useTranslations('home');

  function onClick() {
    const target = document.getElementById(targetId);
    if (!target) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={t('scrollCue')}
      className="hero-cue inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/25 bg-ground/70 text-ink backdrop-blur-sm transition-colors hover:bg-ground"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
}

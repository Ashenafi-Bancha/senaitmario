'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { NAV_ITEMS } from './nav-items';
import { LocaleSwitcher } from './LocaleSwitcher';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { brandName } from '@/content/brand';

/**
 * Mobile navigation: a full-screen overlay in the display face — the small
 * screen gets the same editorial voice as the large one, not a cramped strip.
 *
 * The overlay is portalled to <body> on purpose: the header carries
 * `backdrop-blur`, and a backdrop-filter makes its element the containing
 * block for fixed-position descendants — rendering the panel in place would
 * clip it to the height of the header bar.
 */
export function MobileMenu() {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const panel = (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label={t('menuLabel')}
      className="fixed inset-0 z-50 flex h-[100dvh] flex-col bg-ground"
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-6">
        <span className="font-display text-lg tracking-tight">{brandName}</span>
        <button
          type="button"
          onClick={() => setOpen(false)}
          autoFocus
          className="inline-flex min-h-11 cursor-pointer items-center border border-line px-4 font-utility text-xs uppercase tracking-widest text-ink"
        >
          {t('menuClose')}
        </button>
      </div>

      <nav
        aria-label={t('menuLabel')}
        className="flex-1 overflow-y-auto px-4 py-8 sm:px-6"
      >
        <ul>
          {NAV_ITEMS.map((item, index) => (
            <li key={item.key} className="border-b border-line/60">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="mobile-menu-item block py-3 font-display text-[2rem] leading-tight tracking-tight text-ink no-underline"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-4 border-t border-line px-4 py-4 sm:px-6">
        <LocaleSwitcher />
        <ThemeToggle />
      </div>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="inline-flex min-h-11 cursor-pointer items-center border border-line px-4 font-utility text-xs uppercase tracking-widest text-ink"
      >
        {t('menuOpen')}
      </button>

      {open ? createPortal(panel, document.body) : null}
    </div>
  );
}

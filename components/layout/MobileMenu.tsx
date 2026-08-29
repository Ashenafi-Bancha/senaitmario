'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { NAV_ITEMS } from './nav-items';
import { Wordmark } from './Wordmark';
import { CloseIcon } from '@/components/ui/Icons';

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
        <Wordmark />
        <button
          type="button"
          onClick={() => setOpen(false)}
          autoFocus
          aria-label={t('menuClose')}
          className="-mr-2 inline-flex h-11 w-11 cursor-pointer items-center justify-center text-ink transition-colors hover:text-accent"
        >
          <CloseIcon className="h-6 w-6" />
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

    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="-mr-1 inline-flex min-h-11 cursor-pointer items-center px-2 font-utility text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:text-accent"
      >
        {t('menuOpen')}
      </button>

      {open ? createPortal(panel, document.body) : null}
    </div>
  );
}

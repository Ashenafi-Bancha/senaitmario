import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LocaleSwitcher } from './LocaleSwitcher';
import { MobileMenu } from './MobileMenu';
import { NAV_ITEMS } from './nav-items';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { Wordmark } from './Wordmark';

export function Header() {
  const t = useTranslations('nav');
  const a11y = useTranslations('a11y');

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ground/90 backdrop-blur-sm">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ground focus:px-4 focus:py-2 focus:font-utility focus:text-sm"
      >
        {a11y('skipToContent')}
      </a>
      {/* Height is pinned to --header-h so the full-bleed hero can pull itself
          up behind the header by exactly the right amount. */}
      <div className="mx-auto flex h-[var(--header-h)] max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Wordmark />

        {/* Desktop row */}
        <div className="hidden items-center gap-6 lg:flex">
          <nav aria-label={t('menuLabel')}>
            <ul className="flex gap-5">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="lux-link font-utility text-xs uppercase tracking-widest text-muted no-underline transition-colors hover:text-ink"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <LocaleSwitcher />
          <ThemeToggle />
        </div>

        {/* Mobile: full-screen overlay menu */}
        <MobileMenu />
      </div>
    </header>
  );
}

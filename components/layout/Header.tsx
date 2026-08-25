import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LocaleSwitcher } from './LocaleSwitcher';

const NAV_ITEMS = [
  { href: '/work', key: 'work' },
  { href: '/colour', key: 'colour' },
  { href: '/story', key: 'story' },
  { href: '/peace', key: 'peace' },
  { href: '/institute', key: 'institute' },
  { href: '/press', key: 'press' },
  { href: '/contact', key: 'contact' },
] as const;

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
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-ink no-underline"
        >
          Senait Mario
        </Link>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <nav aria-label={t('menuLabel')}>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="font-utility text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}

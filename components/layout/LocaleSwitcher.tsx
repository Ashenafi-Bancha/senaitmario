'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { usePathname, useRouter } from '@/i18n/navigation';
import { GlobeIcon } from '@/components/ui/Icons';

const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  am: 'አማርኛ',
  it: 'Italiano',
  // Her mother tongue. Offered here even though its pages are not translated
  // yet — selecting it shows the "translation in progress" notice.
  wal: 'Wolayttatto Doonaa',
};

/**
 * Language chooser.
 *
 * `labelled` prints the language name and suits the desktop bar and the
 * mobile menu. `icon` shows a globe and suits the mobile header, where there
 * is no room for a name.
 *
 * Both are the same native <select>, which in the icon variant sits
 * transparent over the globe. That is deliberate: it keeps full keyboard and
 * screen-reader behaviour, and on a phone it opens the operating system's own
 * language picker rather than a hand-rolled menu.
 */
export function LocaleSwitcher({
  variant = 'labelled',
}: {
  variant?: 'labelled' | 'icon';
}) {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onChange(nextLocale: string) {
    // next-intl's router keeps the current route and re-prefixes it; the
    // routing config's localeCookie persists the choice.
    router.replace(
      // @ts-expect-error -- pathname + params are compatible with the typed routes
      { pathname, params },
      { locale: nextLocale as Locale },
    );
  }

  const options = routing.locales.map((availableLocale) => (
    <option key={availableLocale} value={availableLocale}>
      {LOCALE_LABELS[availableLocale]}
    </option>
  ));

  if (variant === 'icon') {
    return (
      <div className="relative inline-flex h-11 w-11 items-center justify-center text-ink transition-colors focus-within:text-accent hover:text-accent lg:h-10 lg:w-10">
        <GlobeIcon className="pointer-events-none h-5 w-5" />
        <select
          value={locale}
          onChange={(event) => onChange(event.target.value)}
          aria-label={t('localeLabel')}
          title={t('localeLabel')}
          className="absolute inset-0 cursor-pointer opacity-0"
        >
          {options}
        </select>
      </div>
    );
  }

  return (
    <label className="flex items-center gap-2 font-utility text-xs uppercase tracking-widest text-muted">
      <span className="sr-only">{t('localeLabel')}</span>
      <select
        value={locale}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-11 cursor-pointer border border-line bg-ground px-3 text-xs text-ink lg:min-h-0 lg:px-2 lg:py-1"
      >
        {options}
      </select>
    </label>
  );
}

'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { usePathname, useRouter } from '@/i18n/navigation';

const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  am: 'አማርኛ',
  it: 'Italiano',
};

export function LocaleSwitcher() {
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

  return (
    <label className="flex items-center gap-2 font-utility text-xs uppercase tracking-widest text-muted">
      <span className="sr-only">{t('localeLabel')}</span>
      <select
        value={locale}
        onChange={(event) => onChange(event.target.value)}
        className="cursor-pointer border border-line bg-ground px-2 py-1 text-xs text-ink"
      >
        {routing.locales.map((availableLocale) => (
          <option key={availableLocale} value={availableLocale}>
            {LOCALE_LABELS[availableLocale]}
          </option>
        ))}
      </select>
    </label>
  );
}

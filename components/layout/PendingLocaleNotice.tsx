import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { TodoMark } from '@/components/ui/TodoMark';
import type { Locale } from '@/i18n/routing';

/**
 * Shown in place of page content for a locale that is offered but not
 * translated yet (see PENDING_LOCALES in i18n/routing.ts).
 *
 * The point is courtesy: name the language properly, say plainly that the
 * translation is still being made, explain why we would rather wait, and
 * offer the languages that are ready — rather than serving her biography in
 * a language it was never written in.
 */
const READY_LOCALES: { locale: Locale; label: string }[] = [
  { locale: 'en', label: 'English' },
  { locale: 'am', label: 'አማርኛ' },
  { locale: 'it', label: 'Italiano' },
];

export function PendingLocaleNotice() {
  const t = useTranslations('pending');

  return (
    <div className="mx-auto flex min-h-[72svh] max-w-3xl flex-col justify-center px-4 py-24 sm:px-6">
      <p className="rise font-utility text-[0.65rem] uppercase tracking-[0.3em] text-muted">
        {t('status')}
      </p>

      <h1 className="rise rise-2 mt-5 font-display text-[clamp(2.5rem,8vw,5rem)] leading-[0.95] tracking-[-0.02em]">
        {t('languageName')}
      </h1>

      <div className="rise rise-3 mt-8 h-px w-24 bg-line" />

      <div className="rise rise-3 mt-8 space-y-5 text-lg leading-relaxed">
        <p>{t('lead')}</p>
        <p className="text-muted">{t('body')}</p>
      </div>

      {/* The same courtesy in Amharic, the other language of her country. */}
      <div className="rise rise-4 mt-8 space-y-4 border-l-2 border-line pl-6 text-base leading-loose" lang="am">
        <p>{t('leadAm')}</p>
        <p className="text-muted">{t('bodyAm')}</p>
      </div>

      <div className="rise rise-4 mt-12">
        <p className="font-utility text-[0.65rem] uppercase tracking-[0.25em] text-muted">
          {t('invite')}
        </p>
        <ul className="mt-5 flex flex-wrap gap-3">
          {READY_LOCALES.map(({ locale, label }) => (
            <li key={locale}>
              <Link
                href="/"
                locale={locale}
                className="inline-flex min-h-11 items-center border border-line px-5 font-display text-lg text-ink no-underline transition-colors hover:border-accent hover:text-accent"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-14 max-w-xl text-sm leading-relaxed text-muted">
        <TodoMark /> {t('todo')}
      </p>
    </div>
  );
}

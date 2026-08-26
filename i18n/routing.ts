import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // 'wal' is the ISO 639-3 code for Wolayttatto Doonaa (Wolaytta) — her
  // mother tongue. It is a first-class locale, but its pages are not
  // translated yet: see PENDING_LOCALES below and the notice rendered by
  // app/[locale]/layout.tsx.
  locales: ['en', 'am', 'it', 'wal'],
  defaultLocale: 'en',
  localePrefix: 'always',
  // Persist the visitor's explicit choice across visits.
  localeCookie: {
    maxAge: 60 * 60 * 24 * 365,
  },
});

export type Locale = (typeof routing.locales)[number];

/**
 * Locales that are offered in the switcher but whose page content is not
 * translated yet. Visiting one shows a courteous "translation in progress"
 * notice instead of untranslated pages — we would rather wait than publish a
 * rough translation of a real person's biography in her own mother tongue.
 */
export const PENDING_LOCALES: readonly Locale[] = ['wal'];

export function isPendingLocale(locale: string): boolean {
  return (PENDING_LOCALES as readonly string[]).includes(locale);
}

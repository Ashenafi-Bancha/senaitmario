import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'am', 'it'],
  defaultLocale: 'en',
  localePrefix: 'always',
  // Persist the visitor's explicit choice across visits.
  localeCookie: {
    maxAge: 60 * 60 * 24 * 365,
  },
});

export type Locale = (typeof routing.locales)[number];

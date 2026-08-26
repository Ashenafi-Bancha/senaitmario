import type { MetadataRoute } from 'next';
import { isPendingLocale, routing } from '@/i18n/routing';
import { collections } from '@/content/collections';
import { siteUrl } from '@/lib/site';

const STATIC_PATHS = [
  '',
  '/work',
  '/colour',
  '/story',
  '/peace',
  '/institute',
  '/press',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...STATIC_PATHS,
    ...collections.map((collection) => `/work/${collection.slug}`),
  ];

  return routing.locales.flatMap((locale) =>
    // A pending locale serves the same notice on every route, so only its
    // root is listed — the rest would be duplicate content.
    (isPendingLocale(locale) ? [''] : paths).map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((altLocale) => [
            altLocale,
            `${siteUrl}/${altLocale}${path}`,
          ]),
        ),
      },
    })),
  );
}

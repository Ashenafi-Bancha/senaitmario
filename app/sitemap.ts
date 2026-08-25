import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
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
    paths.map((path) => ({
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

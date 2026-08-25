import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

/** Per-page title/description/OpenGraph from meta.pages.* message keys. */
export async function pageMetadata(
  locale: string,
  page: string,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `meta.pages.${page}` });
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

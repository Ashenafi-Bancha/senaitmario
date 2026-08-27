import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { RouteTheme } from '@/components/theme/RouteTheme';
import { TodoMark } from '@/components/ui/TodoMark';
import { pageMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'institute');
}

const PROGRAMME_KEYS = [
  'fashionDesign',
  'modeling',
  'cosmetology',
  'nailTechnology',
  'it',
  'security',
] as const;

/**
 * A bridge, not a duplicate — the institute has (will have) its own site,
 * which carries the 3D signature. This page stays short and hands off.
 */
export default async function InstitutePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('institute');

  return (
    <>
      <RouteTheme paletteId="ivory" />
      <div className="mx-auto max-w-4xl px-4 pb-24 pt-16 sm:px-6">
        <h1 className="font-display text-[clamp(2rem,7vw,4.5rem)] leading-tight tracking-tight">
          {t('heading')}
        </h1>
        <p className="mt-4 font-utility text-xs uppercase tracking-widest text-muted">
          {t('founded')}
        </p>
        <p className="mt-8 text-lg leading-relaxed">{t('body')}</p>

        <h2 className="mt-12 font-utility text-xs uppercase tracking-widest text-muted">
          {t('programmesHeading')}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {PROGRAMME_KEYS.map((key) => (
            <li
              key={key}
              className="border border-line px-4 py-2 font-utility text-xs uppercase tracking-widest"
            >
              {t(`programmes.${key}`)}
            </li>
          ))}
        </ul>

        <p className="mt-16 max-w-xl text-lg leading-relaxed text-muted">
          {t('bridge')}
        </p>
        <p className="mt-4 text-sm text-muted">
          {/* TODO: outbound link pending the institute site going live. */}
          <TodoMark /> {t('ctaTodo')}
        </p>
      </div>
    </>
  );
}

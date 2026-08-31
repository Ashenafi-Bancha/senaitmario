import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { RouteTheme } from '@/components/theme/RouteTheme';
import { CreditedImage } from '@/components/media/CreditedImage';
import { TodoMark } from '@/components/ui/TodoMark';
import { Reveal } from '@/components/ui/Reveal';
import { BackLink } from '@/components/ui/BackLink';
import { collections, getCollection } from '@/content/collections';
import { getPalette } from '@/content/palettes';
import { swatches } from '@/content/swatches';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    collections.map((collection) => ({ locale, slug: collection.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};
  const t = await getTranslations({ locale, namespace: 'collections' });
  return {
    title: t(`${slug}.title`),
    description: t(`${slug}.description`),
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const collection = getCollection(slug);
  if (!collection) notFound();

  const t = await getTranslations('work');
  const tAll = await getTranslations();
  const palette = getPalette(collection.paletteId);
  const collectionSwatches = swatches.filter((s) => s.collectionSlug === slug);

  return (
    <>
      <RouteTheme paletteId={collection.paletteId} />
      <article className="mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6">
        <BackLink href="/work" label={t('backToIndex')} className="mb-0" />
        <h1 className="mt-6 font-display text-[clamp(2.5rem,9vw,6rem)] leading-none tracking-tight">
          {tAll(`collections.${slug}.title`)}
        </h1>
        <p className="mt-3 font-utility text-xs uppercase tracking-widest text-muted">
          {collection.year === 'TODO' ? <TodoMark /> : collection.year}
          {' · '}
          {collection.city === 'TODO' ? <TodoMark /> : collection.city}
        </p>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed">
          {tAll(`collections.${slug}.description`)}
        </p>

        <h2 className="mt-16 font-utility text-xs uppercase tracking-widest text-muted">
          {t('detail.imagesHeading')}
        </h2>
        <div className="mt-6 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {collection.images.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.08}>
              <CreditedImage
                asset={image}
                sizes="(min-width: 640px) 45vw, 92vw"
              />
            </Reveal>
          ))}
        </div>

        <h2 className="mt-16 font-utility text-xs uppercase tracking-widest text-muted">
          {t('detail.paletteHeading')}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {collectionSwatches.map((swatch) => (
            <li key={swatch.id}>
              <Link
                href={`/work?swatch=${swatch.id}`}
                className="flex items-center gap-2 border border-line px-3 py-2 no-underline"
              >
                <span
                  aria-hidden="true"
                  className="h-5 w-5 border border-line"
                  style={{ backgroundColor: swatch.hex }}
                />
                <span className="font-utility text-[0.65rem] uppercase tracking-widest text-muted">
                  {tAll(`swatches.${swatch.id}.name`)}
                </span>
              </Link>
            </li>
          ))}
          {/* The collection's own theme tokens, for palette review. */}
          {(['ground', 'ink', 'muted', 'accent', 'line'] as const).map((role) => (
            <li
              key={role}
              className="flex items-center gap-2 border border-line px-3 py-2"
            >
              <span
                aria-hidden="true"
                className="h-5 w-5 border border-line"
                style={{ backgroundColor: palette[role] }}
              />
              <span className="font-utility text-[0.65rem] uppercase tracking-widest text-muted">
                {role} {palette[role]}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}

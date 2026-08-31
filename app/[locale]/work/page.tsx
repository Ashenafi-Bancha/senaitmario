import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { RouteTheme } from '@/components/theme/RouteTheme';
import { CreditedImage } from '@/components/media/CreditedImage';
import { TodoMark } from '@/components/ui/TodoMark';
import { Reveal } from '@/components/ui/Reveal';
import { TiltCard } from '@/components/ui/TiltCard';
import { collections } from '@/content/collections';
import { getSwatch } from '@/content/swatches';
import { pageMetadata } from '@/lib/metadata';
import { BackLink } from '@/components/ui/BackLink';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'work');
}

export default async function WorkPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ swatch?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { swatch: swatchId } = await searchParams;

  const t = await getTranslations('work');
  const tAll = await getTranslations();

  // A swatch on /colour links here with ?swatch=<id>; the index narrows to
  // the pieces using that colour. The active swatch's collection palette
  // takes over the colour field, so the filter is felt, not just listed.
  const activeSwatch = swatchId ? getSwatch(swatchId) : undefined;
  const visibleCollections = activeSwatch
    ? collections.filter((c) => c.slug === activeSwatch.collectionSlug)
    : collections;
  const paletteId = activeSwatch
    ? collections.find((c) => c.slug === activeSwatch.collectionSlug)?.paletteId ??
      'ivory'
    : 'ivory';

  return (
    <>
      <RouteTheme paletteId={paletteId} />
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6">
        <BackLink />
        <h1 className="font-display text-[clamp(2.5rem,9vw,6rem)] leading-none tracking-tight">
          {t('heading')}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">{t('intro')}</p>
        <p className="mt-3 text-sm text-muted">
          <TodoMark /> {t('placeholderNote')}
        </p>

        {activeSwatch ? (
          <div className="mt-8 flex flex-wrap items-center gap-4 border border-line px-4 py-3">
            <span
              aria-hidden="true"
              className="h-6 w-6 border border-line"
              style={{ backgroundColor: activeSwatch.hex }}
            />
            <span className="font-utility text-xs uppercase tracking-widest">
              {t('filteredBy', { swatch: tAll(`swatches.${activeSwatch.id}.name`) })}
            </span>
            <Link
              href="/work"
              className="font-utility text-xs uppercase tracking-widest text-accent underline underline-offset-4"
            >
              {t('clearFilter')}
            </Link>
          </div>
        ) : null}

        <ul className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCollections.map((collection, index) => (
            <li key={collection.slug}>
              <Reveal delay={index * 0.08}>
                <Link
                  href={`/work/${collection.slug}`}
                  className="group block no-underline"
                >
                  <TiltCard className="card-media">
                    <CreditedImage
                      asset={collection.images[0]}
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                    />
                  </TiltCard>
                  <h2 className="mt-4 font-display text-2xl tracking-tight text-ink transition-colors group-hover:text-accent">
                    {tAll(`collections.${collection.slug}.title`)}
                  </h2>
                  <p className="mt-1 font-utility text-xs uppercase tracking-widest text-muted">
                    {collection.year === 'TODO' ? <TodoMark /> : collection.year}
                    {' · '}
                    {collection.city === 'TODO' ? <TodoMark /> : collection.city}
                  </p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

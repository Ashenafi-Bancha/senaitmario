import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { RouteTheme } from '@/components/theme/RouteTheme';
import { CreditedImage } from '@/components/media/CreditedImage';
import { Reveal } from '@/components/ui/Reveal';
import { pieces } from '@/content/pieces';
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

/**
 * The work index.
 *
 * An index of individual pieces rather than a set of collections, because the
 * photographs arrived without a show or a season attached and those are not
 * details to invent. See content/pieces.ts.
 *
 * The layout is a CSS column masonry. Every piece keeps its own proportions -
 * a drawing on paper, a garment shot square on, a runway frame - and a fixed
 * grid would have had to crop all of them to one shape, which is exactly the
 * wrong thing to do to a lookbook. Columns also need no JavaScript and fall
 * from three to two to one on their own.
 */
export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('work');

  return (
    <>
      <BackLink />
      <RouteTheme paletteId="ivory" />
      <div className="mx-auto max-w-6xl px-4 pb-28 pt-16 sm:px-6">
        <h1 className="font-display text-[clamp(2.5rem,9vw,6rem)] leading-none tracking-tight">
          {t('heading')}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">{t('intro')}</p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          {t('piecesIntro')}
        </p>

        <p className="mt-10 font-utility text-[0.65rem] uppercase tracking-[0.28em] text-muted">
          {t('countLabel', { count: pieces.length })}
        </p>

        {/*
          * `columns` rather than `grid`: the pieces are 0.56 to 1.07 in aspect
          * and a grid would crop them all to one shape. break-inside-avoid
          * keeps a picture and its label together in a column.
          */}
        <div className="mt-6 columns-1 gap-5 sm:columns-2 sm:gap-6 lg:columns-3">
          {pieces.map((piece, index) => (
            <div key={piece.id} className="mb-5 break-inside-avoid sm:mb-6">
              <Reveal delay={Math.min(index, 5) * 0.06}>
                {/*
                  * CreditedImage renders its own <figure>, so this wrapper is a
                  * plain div: nesting one figure inside another gave every
                  * piece two of them.
                  */}
                <div className="group">
                  <div className="card-media overflow-hidden border border-line">
                    <CreditedImage
                      asset={piece.image}
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                    />
                  </div>
                  <p className="mt-3 font-utility text-[0.62rem] uppercase tracking-[0.24em] text-muted transition-colors group-hover:text-accent">
                    {t(`kinds.${piece.kind}`)}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

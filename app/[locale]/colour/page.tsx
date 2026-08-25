import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ThemeSection } from '@/components/theme/ThemeSection';
import { SwatchCard } from '@/components/colour/SwatchCard';
import { TodoMark } from '@/components/ui/TodoMark';
import { Reveal } from '@/components/ui/Reveal';
import { palettes } from '@/content/palettes';
import { swatches } from '@/content/swatches';
import { pageMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'colour');
}

export default async function ColourPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('colour');

  return (
    <>
      <ThemeSection
        paletteId="evergreen-light"
        labelledBy="colour-heading"
        className="flex min-h-[45svh] items-end"
      >
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6">
          <h1
            id="colour-heading"
            className="font-display text-[clamp(2.5rem,9vw,6rem)] leading-none tracking-tight"
          >
            {t('heading')}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {t('intro')}
          </p>
        </div>
      </ThemeSection>

      {/*
       * The page demonstrates its own subject: crossing into this section
       * shifts the whole ground into the deep register of the one colour.
       */}
      <ThemeSection
        paletteId="evergreen"
        labelledBy="colour-about"
        className="border-t border-line"
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-28 sm:px-6">
          <h2
            id="colour-about"
            className="font-display text-[clamp(2rem,6vw,4.5rem)] leading-tight tracking-tight"
          >
            {t('aboutHeading')}
          </h2>
          <div className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed">
            <Reveal>
              <p>{t('aboutBody1')}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="text-muted">{t('aboutBody2')}</p>
            </Reveal>
          </div>

          {/* The three registers of the single colour, laid bare. */}
          <ul className="mt-14 grid max-w-2xl grid-cols-3 gap-4">
            {palettes.map((palette) => (
              <li key={palette.id}>
                <span
                  aria-hidden="true"
                  className="block h-24 border border-line"
                  style={{ backgroundColor: palette.ground }}
                />
                <span className="mt-2 block font-utility text-[0.65rem] uppercase tracking-widest text-muted">
                  {palette.ground}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-muted">
            <TodoMark /> {t('aboutNoteTodo')}
          </p>
        </div>
      </ThemeSection>

      <ThemeSection
        paletteId="evergreen-light"
        labelledBy="colour-index"
        className="border-t border-line"
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
          <h2
            id="colour-index"
            className="font-utility text-xs uppercase tracking-widest text-muted"
          >
            {t('indexHeading')}
          </h2>
          <p className="mt-3 text-sm text-muted">
            <TodoMark /> {t('placeholderNote')}
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {swatches.map((swatch, index) => (
              <li key={swatch.id}>
                <Reveal delay={(index % 3) * 0.08}>
                  <SwatchCard swatch={swatch} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </ThemeSection>
    </>
  );
}

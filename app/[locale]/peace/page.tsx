import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { ThemeSection } from '@/components/theme/ThemeSection';
import { PullQuote } from '@/components/ui/PullQuote';
import { Reveal } from '@/components/ui/Reveal';
import { pageMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'peace');
}

// Her stated positions, rendered as paraphrase — never as fabricated quotes.
const POSITION_KEYS = ['colour', 'investment', 'seriousness', 'expression'] as const;

function PeaceContent() {
  const t = useTranslations('peace');

  return (
    <>
      <ThemeSection
        paletteId="ivory"
        labelledBy="peace-heading"
        className="flex min-h-[45svh] items-end"
      >
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6">
          <h1
            id="peace-heading"
            className="font-display text-[clamp(2.5rem,10vw,7rem)] leading-none tracking-tight"
          >
            {t('heading')}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {t('intro')}
          </p>
        </div>
      </ThemeSection>

      <ThemeSection
        paletteId="ivory"
        labelledBy="peace-positions"
        className="border-t border-line"
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
          <h2
            id="peace-positions"
            className="font-utility text-xs uppercase tracking-widest text-muted"
          >
            {t('positionsHeading')}
          </h2>
          <ul className="mt-8 grid max-w-3xl gap-8">
            {POSITION_KEYS.map((key, index) => (
              <li key={key}>
                <Reveal delay={index * 0.05}>
                  <p className="text-lg leading-relaxed">{t(`positions.${key}`)}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <PullQuote paraphrase={t('positions.expression')} />
        </div>
      </ThemeSection>

      <ThemeSection
        paletteId="ivory"
        labelledBy="peace-sodo"
        className="border-t border-line"
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
          <h2
            id="peace-sodo"
            className="font-display text-[clamp(1.75rem,5vw,3.5rem)] leading-tight tracking-tight"
          >
            {t('sodoShowHeading')}
          </h2>
          <div className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed">
            <p>{t('sodoShowBody')}</p>
            <p className="text-muted">{t('sodoShowAttendance')}</p>
          </div>

          <h3 className="mt-16 font-utility text-xs uppercase tracking-widest text-muted">
            {t('eventsHeading')}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {(['expo', 'fashionForPeace'] as const).map((key) => (
              <li
                key={key}
                className="border border-line px-4 py-2 font-utility text-xs uppercase tracking-widest"
              >
                {t(`events.${key}`)}
              </li>
            ))}
          </ul>
        </div>
      </ThemeSection>
    </>
  );
}

export default async function PeacePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PeaceContent />;
}

import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { ThemeSection } from '@/components/theme/ThemeSection';
import { PullQuote } from '@/components/ui/PullQuote';
import { Reveal } from '@/components/ui/Reveal';
import { pageMetadata } from '@/lib/metadata';
import { BackLink } from '@/components/ui/BackLink';
import { quotes } from '@/content/quotes';
import { eventPlatforms } from '@/content/events';
import { TodoMark } from '@/components/ui/TodoMark';

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

function PeaceContent({ locale }: { locale: string }) {
  const t = useTranslations('peace');

  return (
    <>
      <BackLink />
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
          <PullQuote quote={quotes.peace} />
        </div>
      </ThemeSection>

      <ThemeSection
        paletteId="ivory"
        labelledBy="peace-platforms"
        className="border-t border-line"
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
          <h2
            id="peace-platforms"
            className="font-utility text-xs uppercase tracking-[0.25em] text-muted"
          >
            {t('platformsHeading')}
          </h2>

          <div className="mt-10 space-y-20">
            {eventPlatforms.map((platform, index) => (
              <article key={platform.id}>
                <p className="font-utility text-[0.65rem] uppercase tracking-[0.3em] text-muted">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-display text-[clamp(2rem,6vw,4rem)] leading-[0.95] tracking-[-0.015em]">
                  {platform.name}
                </h3>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed">
                  {t(platform.descriptionKey.replace('peace.', ''))}
                </p>

                {platform.editions.length > 0 ? (
                  <>
                    <h4 className="mt-12 font-utility text-[0.65rem] uppercase tracking-[0.25em] text-muted">
                      {t('editionsHeading')}
                    </h4>
                    <ul className="mt-5 max-w-2xl divide-y divide-line border-y border-line">
                      {platform.editions.map((edition) => (
                        <li key={edition.id} className="py-6">
                          <p className="font-utility text-[0.65rem] uppercase tracking-[0.22em] text-accent">
                            {edition.city}, {edition.country} ·{' '}
                            {new Intl.DateTimeFormat(locale, {
                              year: 'numeric',
                              month: 'long',
                            }).format(new Date(`${edition.date}-01`))}
                          </p>
                          <p className="mt-3 leading-relaxed">
                            {t(edition.bodyKey.replace('peace.', ''))}
                          </p>
                          {edition.attendanceKey ? (
                            <p className="mt-3 text-sm leading-relaxed text-muted">
                              {t(edition.attendanceKey.replace('peace.', ''))}
                            </p>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 max-w-2xl text-sm text-muted">
                      <TodoMark /> {t('editionsTodo')}
                    </p>
                  </>
                ) : (
                  <p className="mt-6 max-w-2xl text-sm text-muted">
                    <TodoMark /> {t('expoTodo')}
                  </p>
                )}
              </article>
            ))}
          </div>
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
  return <PeaceContent locale={locale} />;
}

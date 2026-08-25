import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { RouteTheme } from '@/components/theme/RouteTheme';
import { TodoMark } from '@/components/ui/TodoMark';
import { coverage } from '@/content/coverage';
import { recognitions } from '@/content/recognition';
import { personJsonLd } from '@/lib/schema';
import { pageMetadata } from '@/lib/metadata';

/*
 * CONFIRM BEFORE LAUNCH — the exact awarding body and full official title for
 * each of the three recognitions below (2016 MICE award Ghana, 2017 UN Peace
 * Ambassador, 2019 honorary doctorate Nigeria) must be confirmed with the
 * client before this page goes live. The doctorate is HONORARY and must be
 * presented as such — never imply an earned research degree.
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'press');
}

export default async function PressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('press');

  return (
    <>
      <RouteTheme paletteId="ivory" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
      <div className="mx-auto max-w-4xl px-4 pb-24 pt-16 sm:px-6">
        <h1 className="font-display text-[clamp(2.5rem,9vw,6rem)] leading-none tracking-tight">
          {t('heading')}
        </h1>

        <section aria-labelledby="press-bio" className="mt-14">
          <h2
            id="press-bio"
            className="font-utility text-xs uppercase tracking-widest text-muted"
          >
            {t('bioHeading')}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">{t('bio')}</p>
        </section>

        <section aria-labelledby="press-recognition" className="mt-16">
          <h2
            id="press-recognition"
            className="font-utility text-xs uppercase tracking-widest text-muted"
          >
            {t('recognitionHeading')}
          </h2>
          <ol className="mt-6 max-w-2xl divide-y divide-line border-y border-line">
            {recognitions.map((recognition) => (
              <li key={recognition.year} className="flex gap-6 py-5">
                <span className="font-display text-2xl tracking-tight">
                  {recognition.year}
                </span>
                <span>
                  <span className="block text-lg">{t(recognition.titleKey.replace('press.', ''))}</span>
                  <span className="mt-1 block text-sm text-muted">
                    {t(recognition.detailKey.replace('press.', ''))}
                  </span>
                  {recognition.needsConfirmation ? (
                    <span className="mt-2 block text-xs text-muted">
                      <TodoMark /> {t('confirmationNote')}
                    </span>
                  ) : null}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="press-downloads" className="mt-16">
          <h2
            id="press-downloads"
            className="font-utility text-xs uppercase tracking-widest text-muted"
          >
            {t('downloadsHeading')}
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            <TodoMark /> {t('downloadsTodo')}
          </p>
        </section>

        <section aria-labelledby="press-coverage" className="mt-16">
          <h2
            id="press-coverage"
            className="font-utility text-xs uppercase tracking-widest text-muted"
          >
            {t('coverageHeading')}
          </h2>
          <ul className="mt-6 max-w-2xl divide-y divide-line border-y border-line">
            {coverage.map((item) => (
              <li key={item.title} className="py-5">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lux-link text-lg text-ink no-underline"
                  >
                    {item.title}
                  </a>
                ) : (
                  <span className="text-lg text-ink">{item.title}</span>
                )}
                <p className="mt-1 font-utility text-xs uppercase tracking-widest text-muted">
                  {item.outlet} ·{' '}
                  {new Intl.DateTimeFormat(locale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }).format(new Date(item.date))}
                  {item.printRef ? <> · {item.printRef}</> : null}
                  {item.archiveUrl ? (
                    <>
                      {' · '}
                      <a
                        href={item.archiveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lux-link text-accent no-underline"
                      >
                        {t('coverageArchive')}
                      </a>
                    </>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            <TodoMark /> {t('coverageTodo')}
          </p>
        </section>
      </div>
    </>
  );
}

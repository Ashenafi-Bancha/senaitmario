import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { ThemeSection } from '@/components/theme/ThemeSection';
import { CreditedImage } from '@/components/media/CreditedImage';
import { Reveal } from '@/components/ui/Reveal';
import { storyChapters } from '@/content/story';
import { pageMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'story');
}

function StoryIntro() {
  const t = useTranslations('story');
  return (
    <ThemeSection
      paletteId="ivory"
      labelledBy="story-heading"
      className="flex min-h-[50svh] items-end"
    >
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6">
        <h1
          id="story-heading"
          className="font-display text-[clamp(2.5rem,10vw,7rem)] leading-none tracking-tight"
        >
          {t('heading')}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{t('intro')}</p>
      </div>
    </ThemeSection>
  );
}

function Chapter({
  chapter,
  index,
}: {
  chapter: (typeof storyChapters)[number];
  index: number;
}) {
  const t = useTranslations();
  const headingId = `story-${chapter.id}`;
  return (
    <ThemeSection
      paletteId={chapter.paletteId}
      labelledBy={headingId}
      className="flex min-h-[85svh] items-center border-t border-line"
    >
      <div
        className={`mx-auto w-full max-w-6xl gap-12 px-4 py-24 sm:px-6 ${
          chapter.image ? 'grid items-center lg:grid-cols-[3fr_2fr]' : ''
        }`}
      >
        <div>
          <p className="font-utility text-xs uppercase tracking-widest text-muted">
            {String(index + 1).padStart(2, '0')} · {chapter.place}
          </p>
          <h2
            id={headingId}
            className="mt-4 font-display text-[clamp(2rem,7vw,5rem)] leading-tight tracking-tight"
          >
            {t(chapter.titleKey)}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">{t(chapter.bodyKey)}</p>
        </div>
        {chapter.image ? (
          <Reveal>
            <CreditedImage
              asset={chapter.image}
              sizes="(min-width: 1024px) 38vw, 92vw"
              className="mt-10 max-w-md lg:mt-0 lg:justify-self-end"
            />
          </Reveal>
        ) : null}
      </div>
    </ThemeSection>
  );
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <StoryIntro />
      {storyChapters.map((chapter, index) => (
        <Chapter key={chapter.id} chapter={chapter} index={index} />
      ))}
    </>
  );
}

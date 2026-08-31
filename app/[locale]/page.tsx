import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ThemeSection } from '@/components/theme/ThemeSection';
import { CreditedImage } from '@/components/media/CreditedImage';
import { Parallax } from '@/components/ui/Parallax';
import { ScrollCue } from '@/components/ui/ScrollCue';
import { HeroHeaderSync } from '@/components/layout/HeroHeaderSync';
import { Reveal } from '@/components/ui/Reveal';
import { pageMetadata } from '@/lib/metadata';
import { heroPhotos } from '@/content/hero';
import { storyChapters } from '@/content/story';
import { collections } from '@/content/collections';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'home');
}

/**
 * The home page is a set of editorial spreads, not a list of links: every
 * chapter is carried by a full-bleed image with the type set against it.
 *
 * All imagery is LICENSED PLACEHOLDER photography (Wikimedia Commons,
 * credited, logged in RIGHTS.md) — none of it is her work and none of it
 * depicts her. It is here so the layout can be judged; it all gets replaced.
 */
/*
 * The home cards borrow images that already belong to a chapter or a
 * collection, so they look those up rather than restating src, dimensions and
 * credit. Restating them meant a single file could be swapped in one place and
 * keep the old photographer's name in the other, which on her site would be a
 * wrong credit rather than a stale string.
 */
function storyImage(id: string) {
  // StoryChapter.image is optional, so this narrows rather than assuming.
  const image = storyChapters.find((c) => c.id === id)?.images?.[0];
  if (!image) throw new Error(`Home chapter references a story image that is missing: ${id}`);
  return image;
}

function collectionImage(slug: string, index: number) {
  const image = collections.find((c) => c.slug === slug)?.images[index];
  if (!image) throw new Error(`Home chapter references unknown image: ${slug}[${index}]`);
  return image;
}

const CHAPTERS = [
  { key: 'story', href: '/story', paletteId: 'ivory', image: storyImage('sodo') },
  { key: 'work', href: '/work', paletteId: 'ivory', image: collectionImage('placeholder-03', 0) },
  { key: 'colour', href: '/colour', paletteId: 'ivory', image: collectionImage('placeholder-02', 0) },
  { key: 'peace', href: '/peace', paletteId: 'ivory', image: storyImage('addis') },
  { key: 'institute', href: '/institute', paletteId: 'ivory', image: collectionImage('placeholder-02', 1) },
] as const;

function Hero() {
  const t = useTranslations('home');
  return (
    <ThemeSection paletteId="ivory" labelledBy="hero-name">
      {/*
        * Full-bleed hero: the photograph fills the viewport and the type sits
        * over it. The image is pulled up behind the sticky header so it runs
        * to the very top of the screen.
        */}
      <div className="relative -mt-[var(--header-h)] h-[100svh] w-full overflow-hidden">
        {/*
          * The photograph is the background, edge to edge, at every screen
          * size. An earlier attempt showed it uncropped on desktop, letterboxed
          * on a blurred wash - it read as a small floating picture rather than
          * a hero, so it is gone. Cover it is, with the focal point holding
          * her face and hat in frame on wide screens.
          */}
        {/*
          * The photographs are stacked and cross-faded by CSS. Only the first
          * is given priority: it is the one on screen at load and the one the
          * browser measures the page's largest paint against, so the others
          * must not compete with it for bandwidth.
          */}
        <div className="absolute inset-0">
          {heroPhotos.map((photo, index) => (
            <div key={photo.image.src} className="hero-frame absolute inset-0">
              <CreditedImage
                asset={photo.image}
                variant="cover"
                objectPosition={photo.focalPoint}
                sizes="100vw"
                priority={index === 0}
                className="hero-credit absolute inset-0 h-full w-full"
              />
            </div>
          ))}
        </div>

        {/* Keeps the header links legible where they sit on the photograph. */}
        <div
          aria-hidden="true"
          className="hero-topscrim absolute inset-x-0 top-0 h-[calc(var(--header-h)+56px)]"
        />

        {/* Dissolves the far edge and foot of the photograph into the ground. */}
        <div
          aria-hidden="true"
          className="hero-edge absolute inset-0"
        />

        {/* Readability scrim, over the imagery and under the type. */}
        <div
          aria-hidden="true"
          className="hero-scrim absolute inset-0"
        />

        <div className="relative z-10 flex h-full items-end pt-[var(--header-h)] lg:items-center">
          <div className="mx-auto w-full max-w-6xl px-6 pb-28 sm:px-8 lg:pb-0">
            <p className="hero-onphoto rise flex items-center gap-4 font-display text-[clamp(1.2rem,1.8vw,1.5rem)] font-bold uppercase leading-none tracking-[0.4em] text-onphoto lg:font-semibold lg:text-accent">
              {t('heroTitlePrefix')}
              <span
                aria-hidden="true"
                className="h-px w-10 shrink-0 bg-onphoto/70 sm:w-14 lg:bg-accent/55"
              />
            </p>

            <h1
              id="hero-name"
              className="hero-onphoto rise rise-2 mt-5 max-w-2xl font-display text-[clamp(2.5rem,8.5vw,6.5rem)] font-medium uppercase leading-[1.04] tracking-[0.08em] text-onphoto lg:max-w-[40vw] lg:text-ink"
            >
              {t('heroName')}
            </h1>

            <p className="hero-onphoto rise rise-3 mt-7 max-w-xl text-[clamp(1.15rem,1.9vw,1.5rem)] font-medium leading-relaxed text-onphoto lg:text-ink">
              {t('heroRoles')}
            </p>

            <div className="rise rise-4 mt-9 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-start">
              <Link
                href="/story"
                className="hero-cta inline-flex min-h-12 w-full max-w-[19rem] items-center justify-center gap-3 rounded-full bg-onphoto px-7 sm:w-auto sm:max-w-none sm:justify-start font-utility text-[0.7rem] uppercase tracking-[0.25em] text-onphoto-ink no-underline lg:bg-ink lg:text-ground"
              >
                {t('heroCtaStory')}
                <span aria-hidden="true">&rarr;</span>
              </Link>

              <Link
                href="/work"
                className="hero-cta hero-cta-ghost inline-flex min-h-12 w-full max-w-[19rem] items-center justify-center gap-3 rounded-full border border-onphoto/65 px-7 sm:w-auto sm:max-w-none sm:justify-start font-utility text-[0.7rem] uppercase tracking-[0.25em] text-onphoto no-underline lg:border-ink/45 lg:text-ink"
              >
                {t('heroCta')}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
          <ScrollCue targetId="chapter-story" />
        </div>
      </div>
    </ThemeSection>
  );
}

function Chapter({
  chapter,
  index,
}: {
  chapter: (typeof CHAPTERS)[number];
  index: number;
}) {
  const t = useTranslations(`home.chapters.${chapter.key}`);
  const headingId = `chapter-${chapter.key}`;
  const imageFirst = index % 2 === 0;

  return (
    <ThemeSection
      paletteId={chapter.paletteId}
      labelledBy={headingId}
      className="border-t border-line"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-x-14 gap-y-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <Parallax
          amount={26}
          className={imageFirst ? 'lg:order-1' : 'lg:order-2'}
        >
          <Link href={chapter.href} className="block" tabIndex={-1} aria-hidden="true">
            <div className="card-media relative h-[46svh] w-full lg:h-[62svh]">
              <CreditedImage
                asset={chapter.image}
                variant="cover"
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="h-full w-full"
              />
            </div>
          </Link>
        </Parallax>

        <Reveal className={imageFirst ? 'lg:order-2' : 'lg:order-1'}>
          <p className="font-utility text-[0.65rem] uppercase tracking-[0.3em] text-muted">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h2 id={headingId} className="mt-4">
            <Link
              href={chapter.href}
              className="font-display text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.95] tracking-[-0.015em] text-ink no-underline transition-colors hover:text-accent"
            >
              {t('title')}
            </Link>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            {t('lede')}
          </p>
          <p className="mt-8">
            <Link
              href={chapter.href}
              className="lux-link font-utility text-[0.65rem] uppercase tracking-[0.25em] text-accent no-underline"
            >
              {t('cta')} →
            </Link>
          </p>
        </Reveal>
      </div>
    </ThemeSection>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroHeaderSync />
      <Hero />
      {CHAPTERS.map((chapter, index) => (
        <Chapter key={chapter.key} chapter={chapter} index={index} />
      ))}
    </>
  );
}

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
import { heroFocalPoint, heroImage } from '@/content/hero';

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
const CHAPTERS = [
  {
    key: 'story',
    href: '/story',
    paletteId: 'ivory',
    image: {
      src: '/images/story/sodo.jpg',
      width: 1600,
      height: 1115,
      alt: 'Street view of Wolaita Sodo, southern Ethiopia, placeholder image',
      credit: 'Bernard Gagnon, CC BY-SA 3.0, via Wikimedia Commons',
    },
  },
  {
    key: 'work',
    href: '/work',
    paletteId: 'ivory',
    image: {
      src: '/images/collections/museum-costume-01.jpg',
      width: 1280,
      height: 1707,
      alt: 'Ceremonial Ethiopian costume, National Museum of Ethiopia, placeholder image',
      credit: 'Adam Jones, CC BY-SA 2.0, via Wikimedia Commons',
    },
  },
  {
    key: 'colour',
    href: '/colour',
    paletteId: 'ivory',
    image: {
      src: '/images/collections/loom-blue-warp.jpg',
      width: 1280,
      height: 853,
      alt: 'Loom threaded with blue and white warp, Ethiopia, placeholder image',
      credit: 'Thomas Fuhrmann, CC BY-SA 4.0, via Wikimedia Commons',
    },
  },
  {
    key: 'peace',
    href: '/peace',
    paletteId: 'ivory',
    image: {
      src: '/images/story/addis.jpg',
      width: 1600,
      height: 900,
      alt: 'Sunset over Addis Ababa, placeholder image',
      credit: 'Jean Rebiffé, CC BY 2.0, via Wikimedia Commons',
    },
  },
  {
    key: 'institute',
    href: '/institute',
    paletteId: 'ivory',
    image: {
      src: '/images/collections/shiro-meda-market.jpg',
      width: 1600,
      height: 900,
      alt: 'Ethiopian textiles at market, placeholder image',
      credit: 'Rod Waddington, CC BY-SA 2.0, via Wikimedia Commons',
    },
  },
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
        <CreditedImage
          asset={heroImage}
          variant="cover"
          objectPosition={heroFocalPoint}
          sizes="100vw"
          priority
          className="hero-credit absolute inset-0 h-full w-full"
        />

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
            <p
              className="rise font-utility text-[0.7rem] uppercase tracking-[0.35em] text-muted"
            >
              {t('heroTitlePrefix')}
            </p>

            <h1
              id="hero-name"
              className="rise rise-2 mt-5 max-w-2xl font-display text-[clamp(2.5rem,8.5vw,6.5rem)] font-medium uppercase leading-[1.04] tracking-[0.08em] text-ink lg:max-w-[40vw]"
            >
              {t('heroName')}
            </h1>

            <p className="rise rise-3 mt-7 max-w-xl text-[clamp(1.15rem,1.9vw,1.5rem)] font-medium leading-relaxed text-ink">
              {t('heroRoles')}
            </p>

            <div className="rise rise-4 mt-9 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-start">
              <Link
                href="/story"
                className="hero-cta inline-flex min-h-12 w-full max-w-[19rem] items-center justify-center gap-3 rounded-full bg-ink px-7 sm:w-auto sm:max-w-none sm:justify-start font-utility text-[0.7rem] uppercase tracking-[0.25em] text-ground no-underline"
              >
                {t('heroCtaStory')}
                <span aria-hidden="true">&rarr;</span>
              </Link>

              <Link
                href="/work"
                className="hero-cta hero-cta-ghost inline-flex min-h-12 w-full max-w-[19rem] items-center justify-center gap-3 rounded-full border border-ink/45 px-7 sm:w-auto sm:max-w-none sm:justify-start font-utility text-[0.7rem] uppercase tracking-[0.25em] text-ink no-underline"
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

import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ThemeSection } from '@/components/theme/ThemeSection';
import { CreditedImage } from '@/components/media/CreditedImage';
import { pageMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'home');
}

// One colour, moving through its own depths: the ground breathes between the
// primary evergreen, its deeper night register and the pale register as the
// visitor scrolls — never a second hue.
const CHAPTERS = [
  { key: 'story', href: '/story', paletteId: 'evergreen-deep' },
  { key: 'work', href: '/work', paletteId: 'evergreen-light' },
  { key: 'colour', href: '/colour', paletteId: 'evergreen' },
  { key: 'peace', href: '/peace', paletteId: 'evergreen-deep' },
  { key: 'institute', href: '/institute', paletteId: 'evergreen-light' },
] as const;

// TODO — hero photography pending; placeholder SVG stands in. The real hero
// must stay under 400 KB and is the only image on the site allowed `priority`.
const HERO_IMAGE = {
  src: '/images/placeholders/hero.svg',
  width: 1200,
  height: 1600,
  alt: 'Placeholder — hero photograph of Dr. Senait Mario pending',
  credit: 'TODO',
} as const;

function Hero() {
  const t = useTranslations('home');
  return (
    <ThemeSection
      paletteId="evergreen"
      labelledBy="hero-name"
      className="flex min-h-[85svh] items-center"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[3fr_2fr]">
        <div>
          <p className="font-utility text-sm uppercase tracking-widest text-muted">
            {t('heroTitlePrefix')}
          </p>
          <h1
            id="hero-name"
            className="mt-2 font-display text-[clamp(3rem,10vw,8rem)] leading-[0.95] tracking-tight"
          >
            {t('heroName')}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink">{t('heroRoles')}</p>
          <p className="mt-4 max-w-xl text-base text-muted">{t('heroLede')}</p>
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-2 font-utility text-xs uppercase tracking-widest text-muted">
            <div>
              <dd>{t('heroBased')}</dd>
            </div>
            <div>
              <dd>{t('heroOrigin')}</dd>
            </div>
          </dl>
        </div>
        <CreditedImage
          asset={HERO_IMAGE}
          sizes="(min-width: 1024px) 38vw, 92vw"
          priority
          className="max-w-md lg:justify-self-end"
        />
      </div>
    </ThemeSection>
  );
}

function Chapter({
  chapterKey,
  href,
  paletteId,
}: {
  chapterKey: (typeof CHAPTERS)[number]['key'];
  href: string;
  paletteId: string;
}) {
  const t = useTranslations(`home.chapters.${chapterKey}`);
  const headingId = `chapter-${chapterKey}`;
  return (
    <ThemeSection
      paletteId={paletteId}
      labelledBy={headingId}
      className="flex min-h-[70svh] items-center border-t border-line"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <h2 id={headingId}>
          <Link
            href={href}
            className="font-display text-[clamp(2.25rem,8vw,6rem)] leading-none tracking-tight text-ink no-underline transition-colors hover:text-accent"
          >
            {t('title')}
          </Link>
        </h2>
        <p className="mt-5 max-w-lg text-lg text-muted">{t('lede')}</p>
        <p className="mt-8">
          <Link
            href={href}
            className="font-utility text-xs uppercase tracking-widest text-accent underline underline-offset-4"
          >
            {t('cta')} →
          </Link>
        </p>
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
      <Hero />
      {CHAPTERS.map((chapter) => (
        <Chapter
          key={chapter.key}
          chapterKey={chapter.key}
          href={chapter.href}
          paletteId={chapter.paletteId}
        />
      ))}
    </>
  );
}

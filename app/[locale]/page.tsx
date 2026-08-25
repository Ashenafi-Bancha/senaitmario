import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ThemeSection } from '@/components/theme/ThemeSection';
import { CreditedImage } from '@/components/media/CreditedImage';
import { Parallax } from '@/components/ui/Parallax';
import { Reveal } from '@/components/ui/Reveal';
import { pageMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'home');
}

// Client direction: one pale ivory ground with deep brown ink on every page;
// modern black is the optional theme, toggled from the header. The section
// machinery stays so per-collection palettes can return with real photography.
const CHAPTERS = [
  { key: 'story', href: '/story', paletteId: 'ivory' },
  { key: 'work', href: '/work', paletteId: 'ivory' },
  { key: 'colour', href: '/colour', paletteId: 'ivory' },
  { key: 'peace', href: '/peace', paletteId: 'ivory' },
  { key: 'institute', href: '/institute', paletteId: 'ivory' },
] as const;

// TODO — hero photography of Dr. Senait Mario pending; a licensed stock
// garment-detail stands in (deliberately NOT a person — no stranger's face may
// represent her). The real hero must stay under 400 KB and is the only image
// on the site allowed `priority`.
const HERO_IMAGE = {
  src: '/images/portraits/hero-placeholder.jpg',
  width: 1200,
  height: 793,
  alt: 'Embroidered detail of a traditional Ethiopian garment — placeholder image',
  credit: 'A. Davey, CC BY 2.0, via Wikimedia Commons',
  usageNote: 'Placeholder — to be replaced with her photography',
} as const;

function Hero() {
  const t = useTranslations('home');
  return (
    <ThemeSection
      paletteId="ivory"
      labelledBy="hero-name"
      className="flex min-h-[85svh] items-center"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[3fr_2fr]">
        <div>
          <p className="rise font-utility text-sm uppercase tracking-widest text-muted">
            {t('heroTitlePrefix')}
          </p>
          <h1
            id="hero-name"
            className="rise rise-2 mt-2 font-display text-[clamp(2.75rem,10vw,8rem)] leading-[0.95] tracking-tight"
          >
            {t('heroName')}
          </h1>
          <p className="rise rise-3 mt-6 max-w-xl text-lg text-ink">{t('heroRoles')}</p>
          <p className="rise rise-3 mt-4 max-w-xl text-base text-muted">{t('heroLede')}</p>
          <dl className="rise rise-4 mt-10 flex flex-wrap gap-x-10 gap-y-2 font-utility text-xs uppercase tracking-widest text-muted">
            <div>
              <dd>{t('heroBased')}</dd>
            </div>
            <div>
              <dd>{t('heroOrigin')}</dd>
            </div>
          </dl>
        </div>
        <Parallax amount={22} className="max-w-md lg:justify-self-end">
          <div className="unveil">
            <CreditedImage
              asset={HERO_IMAGE}
              sizes="(min-width: 1024px) 38vw, 92vw"
              priority
            />
          </div>
        </Parallax>
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
        <Reveal>
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
              className="lux-link font-utility text-xs uppercase tracking-widest text-accent no-underline"
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

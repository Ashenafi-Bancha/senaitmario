import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { bodyFace, displayFace, ethiopicFace, utilityFace } from '@/app/fonts';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { defaultPaletteId, getPalette } from '@/content/palettes';
import { siteUrl } from '@/lib/site';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t('titleTemplate'),
      template: `%s — ${t('titleTemplate')}`,
    },
    description: t('description'),
    openGraph: {
      siteName: t('siteName'),
      type: 'profile',
      locale,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  // Noto Sans Ethiopic is loaded only on /am routes; other locales never pay
  // for it. The base palette is inlined server-side so first paint is already
  // themed — no flash, and no transition on load.
  const base = getPalette(defaultPaletteId);
  const fontVariables = [
    displayFace.variable,
    bodyFace.variable,
    utilityFace.variable,
    locale === 'am' ? ethiopicFace.variable : null,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <html
      lang={locale}
      className={fontVariables}
      style={
        {
          '--ground': base.ground,
          '--ink': base.ink,
          '--muted': base.muted,
          '--accent': base.accent,
          '--line': base.line,
        } as React.CSSProperties
      }
    >
      <body
        className={`bg-ground text-ink antialiased ${
          locale === 'am' ? 'font-ethiopic' : 'font-body'
        }`}
      >
        <NextIntlClientProvider>
          <ThemeProvider initialPaletteId={defaultPaletteId}>
            <Header />
            <main id="content">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

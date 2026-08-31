import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { RouteTheme } from '@/components/theme/RouteTheme';
import { ContactForm } from '@/components/forms/ContactForm';
import { TodoMark } from '@/components/ui/TodoMark';
import { SocialLinks } from '@/components/layout/SocialLinks';
import { pageMetadata } from '@/lib/metadata';
import { BackLink } from '@/components/ui/BackLink';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'contact');
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');
  const tSocial = await getTranslations('social');

  return (
    <>
      <RouteTheme paletteId="ivory" />
      <div className="mx-auto max-w-4xl px-4 pb-24 pt-16 sm:px-6">
        <BackLink />
        <h1 className="font-display text-[clamp(2.5rem,9vw,6rem)] leading-none tracking-tight">
          {t('heading')}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted">{t('intro')}</p>
        <p className="mt-3 text-sm text-muted">
          <TodoMark /> {t('emailTodo')}
        </p>
        <p className="mt-2 text-sm text-muted">
          <TodoMark /> {t('bookingTodo')}
        </p>
        <div className="mt-12">
          <ContactForm />
        </div>

        <section aria-labelledby="contact-social" className="mt-20 border-t border-line pt-10">
          <h2
            id="contact-social"
            className="font-utility text-xs uppercase tracking-[0.25em] text-muted"
          >
            {tSocial('heading')}
          </h2>
          <SocialLinks className="mt-6" showHandles />
        </section>
      </div>
    </>
  );
}

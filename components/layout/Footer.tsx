import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { TodoMark } from '@/components/ui/TodoMark';
import { brandName } from '@/content/brand';
import { SocialLinks } from './SocialLinks';
import { NAV_ITEMS } from './nav-items';

/**
 * Footer.
 *
 * Opens with her name at display size rather than a row of small print, then
 * three columns — where to go, how to reach her, where to follow — and closes
 * on a hairline bar carrying the legal line. Everything speaks in theme
 * tokens, so it inverts with the black theme like the rest of the site.
 */
export function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-20 sm:px-6">
        {/* Masthead line */}
        <div className="border-b border-line pb-12">
          <p className="font-display text-[clamp(2rem,6vw,4rem)] font-medium uppercase leading-[1.05] tracking-[0.06em] text-ink">
            {brandName}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            {t('roles')}
          </p>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <nav aria-labelledby="footer-explore">
            <h2
              id="footer-explore"
              className="font-utility text-[0.65rem] uppercase tracking-[0.28em] text-muted"
            >
              {t('navHeading')}
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="lux-link text-sm text-ink no-underline"
                  >
                    {nav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-enquiries">
            <h2
              id="footer-enquiries"
              className="font-utility text-[0.65rem] uppercase tracking-[0.28em] text-muted"
            >
              {t('contactHeading')}
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <TodoMark /> {t('contactTodo')}
              </li>
              <li>
                <TodoMark /> {t('bookingTodo')}
              </li>
              <li>
                <Link
                  href="/contact"
                  className="lux-link text-ink no-underline"
                >
                  {nav('contact')}
                </Link>
              </li>
            </ul>
          </section>

          <section aria-labelledby="footer-follow">
            <h2
              id="footer-follow"
              className="font-utility text-[0.65rem] uppercase tracking-[0.28em] text-muted"
            >
              {t('followHeading')}
            </h2>
            <SocialLinks className="mt-5" showHandles />
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {t('institute')}
            </p>
          </section>
        </div>

        {/* Fine print */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <p className="font-utility text-[0.65rem] uppercase tracking-[0.22em] text-muted">
            {t('based')}
          </p>
          <p className="font-utility text-[0.65rem] uppercase tracking-[0.22em] text-muted">
            {t('copyright', { year })}
          </p>
        </div>
      </div>
    </footer>
  );
}

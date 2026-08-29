import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { brandName } from '@/content/brand';
import { SocialLinks } from './SocialLinks';
import { NAV_ITEMS } from './nav-items';

/**
 * Footer.
 *
 * Three parts across: who she is on the left, at display size and carrying
 * the same line as the hero, then the quick links, then the social marks.
 * A hairline bar closes it with the copyright and a way back to the top.
 *
 * Everything speaks in theme tokens, so it inverts with the black theme along
 * with the rest of the site; the only fixed colours on the page are the social
 * platforms' own brand marks.
 */
export function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-20 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[1.8fr_1fr_1fr] lg:gap-16">
          {/* Who she is */}
          <div>
            <p className="font-display text-[clamp(1.9rem,5vw,3.25rem)] font-medium uppercase leading-[1.05] tracking-[0.06em] text-ink">
              {brandName}
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              {t('roles')}
            </p>
            <p className="mt-4 max-w-md font-utility text-[0.7rem] uppercase leading-relaxed tracking-[0.16em] text-muted">
              {t('institute')}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-labelledby="footer-explore">
            <h2
              id="footer-explore"
              className="font-utility text-[0.65rem] uppercase tracking-[0.28em] text-muted"
            >
              {t('navHeading')}
            </h2>
            <ul className="mt-6 space-y-3">
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

          {/* Social */}
          <section aria-labelledby="footer-follow">
            <h2
              id="footer-follow"
              className="font-utility text-[0.65rem] uppercase tracking-[0.28em] text-muted"
            >
              {t('followHeading')}
            </h2>
            {/* Marks only here - the handles are spelled out on the contact page. */}
            <SocialLinks className="mt-5 -ml-2.5" />
          </section>
        </div>

        {/* Fine print */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <p className="font-utility text-[0.65rem] uppercase tracking-[0.22em] text-muted">
            {t('copyright', { year })}
          </p>
          <a
            href="#content"
            className="lux-link font-utility text-[0.65rem] uppercase tracking-[0.22em] text-muted no-underline"
          >
            {t('backToTop')}
          </a>
        </div>
      </div>
    </footer>
  );
}

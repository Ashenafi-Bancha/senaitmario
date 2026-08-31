import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowLeftIcon } from '@/components/ui/Icons';

/**
 * The way back, at the head of every page below the home page.
 *
 * It brings its own container and top padding rather than sitting inside the
 * page's first block. Several pages open with a band that is half a screen
 * tall and aligns its contents to the bottom, so the heading falls low and
 * deliberately - a back link inside that band went down with it and landed
 * near the middle of a phone screen. Placed first and on its own, it sits
 * directly under the header on every page and at every width.
 *
 * A server component on purpose. Putting it in the layout would have needed
 * the pathname, which only a client component can read, and the home page has
 * under two kilobytes of headroom against the bundle budget. Each page places
 * it instead, and it ships no JavaScript at all.
 */
export function BackLink({
  href = '/',
  label,
  width = 'wide',
}: {
  /** Where back goes. Home everywhere except inside a collection. */
  href?: '/' | '/work';
  /**
   * Overrides the label. Only needed where the wording lives in another
   * namespace, which is the collection page and its "All collections";
   * passing the text avoids duplicating that string into `nav` to reach it.
   */
  label?: string;
  /** Match the width of the page it sits above, so the two line up. */
  width?: 'wide' | 'narrow';
}) {
  const t = useTranslations('nav');

  return (
    <div
      className={`mx-auto w-full px-4 pt-6 sm:px-6 ${
        width === 'narrow' ? 'max-w-4xl' : 'max-w-6xl'
      }`}
    >
      <Link
        href={href}
        className="group inline-flex items-center gap-2.5 font-utility text-[0.7rem] uppercase tracking-[0.25em] text-muted no-underline transition-colors hover:text-accent focus-visible:text-accent"
      >
        <ArrowLeftIcon className="h-4 w-4 transition-transform duration-300 motion-safe:group-hover:-translate-x-1" />
        {label ?? t('backHome')}
      </Link>
    </div>
  );
}

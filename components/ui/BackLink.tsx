import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ArrowLeftIcon } from '@/components/ui/Icons';

/**
 * The way back, at the head of every page below the home page.
 *
 * A server component on purpose. Putting it in the layout would have needed
 * the pathname, which only a client component can read, and the home page has
 * well under a kilobyte of headroom against the bundle budget. Each page
 * places it instead, and it ships no JavaScript at all.
 */
export function BackLink({
  href = '/',
  label,
  className,
}: {
  /** Where back goes. Home everywhere except inside a collection. */
  href?: '/' | '/work';
  /**
   * Overrides the label. Only needed where the wording lives in another
   * namespace, which is the collection page and its "All collections"; passing
   * the text avoids duplicating that string into `nav` just to reach it here.
   */
  label?: string;
  className?: string;
}) {
  const t = useTranslations('nav');

  return (
    <p className={className ?? 'mb-8'}>
      <Link
        href={href}
        className="group inline-flex items-center gap-2.5 font-utility text-[0.7rem] uppercase tracking-[0.25em] text-muted no-underline transition-colors hover:text-accent focus-visible:text-accent"
      >
        <ArrowLeftIcon className="h-4 w-4 transition-transform duration-300 motion-safe:group-hover:-translate-x-1" />
        {label ?? t('backHome')}
      </Link>
    </p>
  );
}

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Swatch } from '@/content/types';

/**
 * One entry in the Colour Index: the colour itself, its name, and the short
 * line on what it carries. The collection it was lifted from is printed only
 * once there are collections to name.
 *
 * The card links to the work index. It used to filter that index by swatch;
 * with the collections gone there is nothing to filter by, and the filter
 * comes back with them.
 */
export function SwatchCard({ swatch }: { swatch: Swatch }) {
  const t = useTranslations();
  const name = t(`swatches.${swatch.id}.name`);

  return (
    <Link
      href="/work"
      className="group block border border-line no-underline transition-colors hover:border-accent focus-visible:border-accent"
    >
      <span
        aria-hidden="true"
        className="block aspect-square w-full"
        style={{ backgroundColor: swatch.hex }}
      />
      <span className="block border-t border-line p-4">
        <span className="block font-display text-xl tracking-tight text-ink">
          {name}
        </span>
        <span className="mt-1 block font-utility text-[0.65rem] uppercase tracking-widest text-muted">
          {swatch.hex}
          {/*
            * The collection a colour came from is only printed once there are
            * collections to name. See content/collections.ts.
            */}
          {swatch.collectionSlug
            ? ` · ${t('colour.fromCollection', { collection: t(`collections.${swatch.collectionSlug}.title`) })}`
            : null}
        </span>
        <span className="mt-3 block font-utility text-[0.65rem] uppercase tracking-widest text-accent">
          {t(`colour.carriesLabels.${swatch.carries}`)}
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-muted">
          {t(`swatches.${swatch.id}.carries`)}
        </span>
        <span className="mt-4 block font-utility text-[0.65rem] uppercase tracking-widest text-ink underline underline-offset-4 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          {t('colour.filterAction')} →
        </span>
      </span>
    </Link>
  );
}

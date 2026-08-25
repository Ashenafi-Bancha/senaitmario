import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { ImageAsset } from '@/content/types';

/**
 * The only way images render on this site. Runway and editorial photography
 * is almost always owned by the photographer, not the designer, so the credit
 * is mandatory and rendered visibly under every image. A missing or TODO
 * credit renders a loud warning in development instead of silently shipping
 * an uncredited image; the asset must also be listed in RIGHTS.md.
 */
export function CreditedImage({
  asset,
  sizes,
  priority = false,
  className,
}: {
  asset: ImageAsset;
  /** Responsive sizes attribute — required so nothing ships at full width by accident. */
  sizes: string;
  /** Only the single LCP hero may set this. */
  priority?: boolean;
  className?: string;
}) {
  const t = useTranslations('credits');
  const creditMissing = !asset.credit || asset.credit === 'TODO';

  return (
    <figure className={className}>
      <Image
        src={asset.src}
        width={asset.width}
        height={asset.height}
        alt={asset.alt}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className="h-auto w-full border border-line"
      />
      <figcaption className="mt-2 font-utility text-[0.65rem] uppercase tracking-widest text-muted">
        {creditMissing ? (
          process.env.NODE_ENV !== 'production' ? (
            <span
              role="alert"
              className="inline-block border-2 border-accent px-2 py-1 font-medium text-accent"
            >
              ⚠ {t('missing')}
            </span>
          ) : (
            // Production fallback: never render an empty credit line silently.
            <span>{t('photo', { credit: 'TODO' })}</span>
          )
        ) : (
          <span>{t('photo', { credit: asset.credit })}</span>
        )}
        {asset.usageNote ? (
          <span className="ml-3 normal-case tracking-normal">{asset.usageNote}</span>
        ) : null}
      </figcaption>
    </figure>
  );
}

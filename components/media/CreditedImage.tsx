import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { ImageAsset } from '@/content/types';

/**
 * The only way images render on this site. Runway and editorial photography
 * is almost always owned by the photographer, not the designer, so the credit
 * is mandatory and always rendered. A missing or TODO credit shows a loud
 * warning in development rather than silently shipping an uncredited image;
 * the asset must also be listed in RIGHTS.md.
 *
 * Two variants:
 *  - `block` (default): the image sits in the flow, credit beneath it.
 *  - `cover`: the image fills its positioned parent (object-cover) and the
 *    credit floats over the bottom edge — for full-bleed editorial frames.
 */
export function CreditedImage({
  asset,
  sizes,
  priority = false,
  className,
  variant = 'block',
  objectPosition,
  fit = 'cover',
  imgClassName,
}: {
  asset: ImageAsset;
  /** Responsive sizes attribute — required so nothing ships at full width by accident. */
  sizes: string;
  /** Only the single LCP hero may set this. */
  priority?: boolean;
  className?: string;
  variant?: 'block' | 'cover';
  /**
   * Focal point for a `cover` crop, e.g. 'center 10%'. A tall portrait in a
   * wide frame crops from the middle by default, which can cut a face out
   * entirely; this pins the part that must survive.
   */
  objectPosition?: string;
  /**
   * `cover` fills the frame and crops; `contain` shows the whole photograph
   * and leaves space around it. A tall portrait in a wide hero needs
   * `contain`, or two thirds of the garment is cropped away.
   */
  fit?: 'cover' | 'contain';
  /**
   * Extra classes on the <img> itself, for cases where the fit has to change
   * with the viewport - a tall portrait can cover on a phone and contain on
   * a desktop. Supplying this overrides `fit`.
   */
  imgClassName?: string;
}) {
  const t = useTranslations('credits');
  const creditMissing = !asset.credit || asset.credit === 'TODO';
  const showDevWarning = creditMissing && process.env.NODE_ENV !== 'production';

  const creditText = creditMissing
    ? t('photo', { credit: 'TODO' })
    : t('photo', { credit: asset.credit });

  if (variant === 'cover') {
    // The credit sits BELOW the frame, never over the photograph: overlaid
    // text is unreadable against unpredictable imagery and cheapens the page.
    return (
      <figure className={`flex flex-col ${className ?? ''}`}>
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <Image
            src={asset.src}
            alt={asset.alt}
            fill
            sizes={sizes}
            priority={priority}
            className={
              imgClassName ?? (fit === 'contain' ? 'object-contain' : 'object-cover')
            }
            style={objectPosition ? { objectPosition } : undefined}
          />
        </div>
        <figcaption className="mt-2 shrink-0 font-utility text-[0.55rem] uppercase tracking-[0.2em] text-muted">
          {showDevWarning ? (
            <span
              role="alert"
              className="inline-block border-2 border-accent px-2 py-1 font-medium text-accent"
            >
              ⚠ {t('missing')}
            </span>
          ) : (
            <span>{creditText}</span>
          )}
        </figcaption>
      </figure>
    );
  }

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
        className="h-auto w-full"
      />
      <figcaption className="mt-2 font-utility text-[0.6rem] uppercase tracking-[0.18em] text-muted/70">
        {showDevWarning ? (
          <span
            role="alert"
            className="inline-block border-2 border-accent px-2 py-1 font-medium text-accent"
          >
            ⚠ {t('missing')}
          </span>
        ) : (
          <span>{creditText}</span>
        )}
        {asset.usageNote ? (
          <span className="ml-3 normal-case tracking-normal">{asset.usageNote}</span>
        ) : null}
      </figcaption>
    </figure>
  );
}

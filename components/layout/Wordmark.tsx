import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import {
  brandLogo,
  brandName,
  brandPortrait,
  brandPortraitFocalPoint,
} from '@/content/brand';

/**
 * The masthead. Renders, in order of what has been supplied:
 *
 *  1. her logo, if `brandLogo` is set in content/brand.ts
 *  2. otherwise her name in the display face, which is a legitimate wordmark
 *
 * An optional portrait can sit beside either. No stock face or placeholder
 * mark is ever substituted: if nothing is supplied, the name stands alone.
 *
 * When a separate dark-theme logo is supplied, both are rendered and CSS
 * shows the right one (see .brand-logo rules in globals.css). That avoids a
 * flash of the wrong logo, which a JS-side theme check would cause.
 */
export function Wordmark({ className }: { className?: string }) {
  const logoHeight = brandLogo?.displayHeight ?? 32;
  const logoWidth = brandLogo
    ? Math.round((brandLogo.width / brandLogo.height) * logoHeight)
    : 0;
  const isSvg = (src: string) => src.toLowerCase().endsWith('.svg');

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 text-ink no-underline ${className ?? ''}`}
      aria-label={brandName}
    >
      {brandPortrait ? (
        <Image
          src={brandPortrait.src}
          alt=""
          width={72}
          height={72}
          className="h-9 w-9 shrink-0 rounded-full border border-line object-cover"
          style={{ objectPosition: brandPortraitFocalPoint }}
          priority
        />
      ) : null}

      {brandLogo ? (
        <>
          <Image
            src={brandLogo.src}
            alt={brandLogo.srcDark ? '' : brandName}
            width={logoWidth}
            height={logoHeight}
            style={{ height: logoHeight, width: 'auto' }}
            className={brandLogo.srcDark ? 'brand-logo brand-logo--default' : 'brand-logo'}
            unoptimized={isSvg(brandLogo.src)}
            priority
          />
          {brandLogo.srcDark ? (
            <Image
              src={brandLogo.srcDark}
              alt={brandName}
              width={logoWidth}
              height={logoHeight}
              style={{ height: logoHeight, width: 'auto' }}
              className="brand-logo brand-logo--noir"
              unoptimized={isSvg(brandLogo.srcDark)}
              priority
            />
          ) : null}
          {brandLogo.showNameBeside ? (
            <span className="font-display text-lg leading-none tracking-tight whitespace-nowrap">
              {brandName}
            </span>
          ) : null}
        </>
      ) : (
        <span className="font-display text-lg leading-none tracking-tight whitespace-nowrap">
          {brandName}
        </span>
      )}
    </Link>
  );
}

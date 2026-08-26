import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { brandName, brandPortrait } from '@/content/brand';

/**
 * The masthead: her full title and name, optionally preceded by a small
 * portrait. Renders name-only until a real portrait is supplied — no stock
 * face may stand in for her.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 text-ink no-underline ${className ?? ''}`}
    >
      {brandPortrait ? (
        <Image
          src={brandPortrait.src}
          alt=""
          width={36}
          height={36}
          className="h-9 w-9 shrink-0 rounded-full border border-line object-cover"
          priority
        />
      ) : null}
      <span className="font-display text-lg leading-none tracking-tight whitespace-nowrap">
        {brandName}
      </span>
    </Link>
  );
}

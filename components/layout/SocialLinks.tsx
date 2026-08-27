import { useTranslations } from 'next-intl';
import { BRAND_ICONS } from '@/components/ui/BrandIcons';
import { TodoMark } from '@/components/ui/TodoMark';
import {
  confirmedSocialAccounts,
  hasUnconfirmedSocialAccounts,
} from '@/content/social';

/**
 * Her social profiles, shown as the platforms' own brand marks.
 *
 * Only confirmed accounts render as links. Anything still unconfirmed is
 * surfaced as an outstanding item instead — linking a profile that turns out
 * not to be hers would send her audience to a stranger.
 */
export function SocialLinks({
  size = 'default',
  showHandles = false,
  className,
}: {
  size?: 'default' | 'large';
  /** Print the handle beside the mark, where the layout has room. */
  showHandles?: boolean;
  className?: string;
}) {
  const t = useTranslations('social');

  const box = size === 'large' ? 'h-12 w-12' : 'h-11 w-11';
  const glyph = size === 'large' ? 'h-6 w-6' : 'h-5 w-5';

  return (
    <div className={className}>
      <ul className="flex flex-wrap items-center gap-3">
        {confirmedSocialAccounts.map((account) => {
          const Icon = BRAND_ICONS[account.platform];
          return (
            <li key={account.platform}>
              <a
                href={account.url}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label={t('visitOn', { platform: account.label })}
                className="group inline-flex items-center gap-3 no-underline"
              >
                <span
                  className={`inline-flex ${box} shrink-0 items-center justify-center border border-line transition-colors group-hover:border-accent`}
                >
                  <Icon className={glyph} />
                </span>
                {showHandles && account.handle ? (
                  <span className="font-utility text-[0.65rem] uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-ink">
                    {account.handle}
                  </span>
                ) : null}
              </a>
            </li>
          );
        })}
      </ul>

      {hasUnconfirmedSocialAccounts ? (
        <p className="mt-4 text-sm text-muted">
          <TodoMark /> {t('unconfirmedTodo')}
        </p>
      ) : null}
    </div>
  );
}

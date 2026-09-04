import { useTranslations } from 'next-intl';
import { BRAND_ICONS } from '@/components/ui/BrandIcons';
import { TodoMark } from '@/components/ui/TodoMark';
import {
  socialAccounts,
  pendingSocialAccounts,
} from '@/content/social';

/**
 * Her social profiles, shown as the platforms' own brand marks.
 *
 * The marks are set bare rather than in outlined boxes, so the only colour in
 * the row is each platform's own. Confirmed accounts are links; an account
 * still waiting on a detail from her keeps its mark in place, held back and
 * not clickable, and is named in the outstanding note underneath. Linking a
 * profile or a number that turns out not to be hers would send her audience
 * to a stranger, so the mark waits rather than guesses.
 */
export function SocialLinks({
  size = 'default',
  showHandles = false,
  className,
}: {
  size?: 'default' | 'large';
  /** Print the handle beside the mark. Off in the footer, on where there is room. */
  showHandles?: boolean;
  className?: string;
}) {
  const t = useTranslations('social');

  const box = size === 'large' ? 'h-12 w-12' : 'h-11 w-11';
  const glyph = size === 'large' ? 'h-7 w-7' : 'h-6 w-6';

  return (
    <div className={className}>
      <ul
        className={
          showHandles
            ? 'flex flex-col gap-2'
            : 'flex flex-wrap items-center gap-1'
        }
      >
        {socialAccounts.map((account) => {
          const Icon = BRAND_ICONS[account.platform];

          if (!account.url) {
            /*
             * Drawn at full strength beside the other two, at the client's
             * request, but still not a link: there is no number to link to.
             * The title and the screen-reader line say so, since an icon that
             * looks identical to its neighbours and does nothing is otherwise
             * just a dead end.
             */
            return (
              <li key={account.platform}>
                <span
                  className={`inline-flex ${box} items-center justify-center`}
                  title={t('pending', { platform: account.label })}
                >
                  <Icon className={glyph} />
                  <span className="sr-only">
                    {t('pending', { platform: account.label })}
                  </span>
                </span>
              </li>
            );
          }

          return (
            <li key={account.platform}>
              <a
                href={account.url}
                target="_blank"
                rel="me noopener noreferrer"
                aria-label={t('visitOn', { platform: account.label })}
                className="social-mark group inline-flex items-center gap-3 no-underline"
              >
                <span
                  className={`inline-flex ${box} shrink-0 items-center justify-center transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:scale-110`}
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

      {pendingSocialAccounts.length > 0 ? (
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
          <TodoMark />{' '}
          {t('unconfirmedTodo', {
            platforms: pendingSocialAccounts.map((a) => a.label).join(', '),
          })}
        </p>
      ) : null}
    </div>
  );
}

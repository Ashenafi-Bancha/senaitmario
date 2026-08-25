import { useTranslations } from 'next-intl';
import { TodoMark } from './TodoMark';
import type { Quote } from '@/content/quotes';

/**
 * Styled pull-quote.
 *
 * Two modes, and the distinction matters on a real person's site:
 *  - `quote`: her genuine published words, shown in quotation marks WITH the
 *    citation visible so a reader can verify it.
 *  - `paraphrase`: our summary of a position she holds — rendered plainly,
 *    never inside quotation marks, never attributed as speech.
 *
 * Invented sentences must never appear in either mode.
 */
export function PullQuote({
  quote,
  paraphrase,
}: {
  quote?: Quote;
  paraphrase?: string;
}) {
  const t = useTranslations('peace');

  if (quote) {
    const year = quote.date.slice(0, 4);
    return (
      <figure className="my-12 border-l-4 border-accent py-2 pl-6 sm:pl-8">
        <blockquote>
          <p className="max-w-2xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
            &ldquo;{quote.text}&rdquo;
          </p>
        </blockquote>
        <figcaption className="mt-4 font-utility text-[0.65rem] uppercase tracking-widest text-muted">
          Dr. Senait Mario ·{' '}
          <a
            href={quote.url}
            target="_blank"
            rel="noopener noreferrer"
            className="lux-link text-accent no-underline"
          >
            {quote.outlet}, {year}
          </a>
          {quote.needsClientConfirmation ? (
            <>
              {' '}
              <TodoMark /> {t('pullQuoteConfirm')}
            </>
          ) : null}
        </figcaption>
      </figure>
    );
  }

  return (
    <aside className="my-12 border-l-4 border-accent py-2 pl-6 sm:pl-8">
      <p className="max-w-xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
        {paraphrase}
      </p>
      <p className="mt-4 font-utility text-[0.65rem] uppercase tracking-widest text-muted">
        <TodoMark /> {t('pullQuoteTodo')}
      </p>
    </aside>
  );
}

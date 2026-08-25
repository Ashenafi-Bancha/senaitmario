import { useTranslations } from 'next-intl';
import { TodoMark } from './TodoMark';

/**
 * Styled pull-quote block. There are NO approved verbatim quotes yet, so this
 * component never renders invented sentences inside quotation marks next to
 * her name — it renders the paraphrased position (plain, unquoted) and a
 * visible marker that the verbatim quote is pending client approval.
 */
export function PullQuote({ paraphrase }: { paraphrase: string }) {
  const t = useTranslations('peace');

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

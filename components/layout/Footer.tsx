import { useTranslations } from 'next-intl';
import { TodoMark } from '@/components/ui/TodoMark';
import { brandName } from '@/content/brand';

export function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl tracking-tight">{brandName}</p>
          <p className="mt-2 text-sm text-muted">{t('roles')}</p>
          <p className="mt-1 font-utility text-xs uppercase tracking-widest text-muted">
            {t('based')}
          </p>
        </div>
        <div className="space-y-2 text-sm text-muted">
          <p>
            <TodoMark /> {t('contactTodo')}
          </p>
          <p>
            <TodoMark /> {t('bookingTodo')}
          </p>
          <p>
            <TodoMark /> {t('socialTodo')}
          </p>
        </div>
        <div className="space-y-2 text-sm text-muted">
          <p>{t('institute')}</p>
          <p className="font-utility text-xs">{t('copyright', { year })}</p>
        </div>
      </div>
    </footer>
  );
}

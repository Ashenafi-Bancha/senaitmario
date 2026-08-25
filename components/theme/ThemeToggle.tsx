'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from './ThemeProvider';

/**
 * Switches the whole site between the default ivory theme and the optional
 * modern-black theme. The registered custom properties make the crossover one
 * smooth eased transition (instant under reduced motion).
 */
export function ThemeToggle() {
  const t = useTranslations('nav');
  const { mode, toggleMode } = useTheme();
  const noirActive = mode === 'noir';

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-pressed={noirActive}
      aria-label={noirActive ? t('themeToIvory') : t('themeToNoir')}
      className="inline-flex min-h-11 cursor-pointer items-center border border-line bg-ground px-4 font-utility text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent lg:min-h-0 lg:px-3 lg:py-1"
    >
      {noirActive ? t('themeIvory') : t('themeNoir')}
    </button>
  );
}

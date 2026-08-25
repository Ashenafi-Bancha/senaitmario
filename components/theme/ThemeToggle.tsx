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
      className="cursor-pointer border border-line bg-ground px-3 py-1 font-utility text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent"
    >
      {noirActive ? t('themeIvory') : t('themeNoir')}
    </button>
  );
}

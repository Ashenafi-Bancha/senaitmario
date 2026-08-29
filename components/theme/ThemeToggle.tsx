'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from './ThemeProvider';
import { MoonIcon, SunIcon } from '@/components/ui/Icons';

/**
 * Switches the whole site between the ivory theme and the modern black one.
 * The registered custom properties make the crossover one eased transition
 * (instant under reduced motion).
 *
 * The icon shows the theme currently in use: a sun for ivory, a moon for
 * black. The accessible name carries the action rather than the state, so a
 * screen reader hears "switch to the modern black theme" rather than just
 * "sun", and `aria-pressed` reports whether black is on.
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
      title={noirActive ? t('themeToIvory') : t('themeToNoir')}
      className="inline-flex h-11 w-11 cursor-pointer items-center justify-center text-ink transition-colors hover:text-accent lg:h-10 lg:w-10"
    >
      {noirActive ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </button>
  );
}

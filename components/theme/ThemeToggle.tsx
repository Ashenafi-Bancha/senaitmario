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
      className="inline-flex h-11 w-11 cursor-pointer items-center justify-center border border-line bg-ground/0 text-ink transition-colors hover:border-accent hover:text-accent lg:h-9 lg:w-9"
    >
      {noirActive ? (
        <MoonIcon className="h-[1.15rem] w-[1.15rem]" />
      ) : (
        <SunIcon className="h-[1.15rem] w-[1.15rem]" />
      )}
    </button>
  );
}

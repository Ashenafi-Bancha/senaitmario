'use client';

import { useEffect } from 'react';

/**
 * Rendered only by pages whose hero runs to the top of the screen.
 *
 * The header is translucent, which was covering the top of the hero
 * photograph - on her portrait it clipped the crown of her hat. While the
 * page is scrolled to the top this marks the document so the header can drop
 * its background entirely and let the photograph through; once the reader
 * scrolls, the background fades back so the navigation stays legible over
 * the content below.
 */
export function HeroHeaderSync() {
  useEffect(() => {
    const root = document.documentElement;

    // Deliberately not rAF-throttled: reading scrollY and writing one dataset
    // attribute is cheap, and a rAF gate stops running entirely in a
    // backgrounded tab, which would strand the header in the wrong state.
    const update = () => {
      const atTop = window.scrollY < 32;
      const next = atTop ? 'true' : 'false';
      if (root.dataset.heroTop !== next) root.dataset.heroTop = next;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      delete root.dataset.heroTop;
    };
  }, []);

  return null;
}

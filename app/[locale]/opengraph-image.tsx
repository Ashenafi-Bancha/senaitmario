import { ImageResponse } from 'next/og';
import { defaultPaletteId, getPalette } from '@/content/palettes';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Dr. Senait Mario — fashion designer, model, sociologist, UN Peace Ambassador';

/**
 * Placeholder OpenGraph image shared by all pages under a locale — typographic
 * on the default palette's ground, until real cleared photography allows true
 * per-page OG images (tracked in the client TODO list). Colours come from
 * content/palettes.ts so the one-file palette swap covers this card too.
 */
export default function OpenGraphImage() {
  const palette = getPalette(defaultPaletteId);
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 72,
          backgroundColor: palette.ground,
          color: palette.ink,
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 6, color: palette.muted }}>
          DR.
        </div>
        <div style={{ fontSize: 110, letterSpacing: -3, lineHeight: 1 }}>
          Senait Mario
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: palette.muted }}>
          Fashion designer · Model · Sociologist · UN Peace Ambassador
        </div>
        <div style={{ marginTop: 10, fontSize: 24, color: palette.accent }}>
          Rome · Addis Ababa
        </div>
      </div>
    ),
    size,
  );
}

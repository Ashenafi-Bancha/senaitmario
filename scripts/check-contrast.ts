/**
 * Build gate: every palette must hold AA contrast (≥ 4.5:1) for every
 * text-on-ground pair — ink, muted and accent are all used as text.
 *
 * Wired as `prebuild`, so `next build` fails if a palette regresses.
 * Run standalone with `npm run check:contrast`.
 */
import { palettes } from '../content/palettes';
import { AA_NORMAL_TEXT, contrastRatio } from '../lib/contrast';

const CHECKED_ROLES = ['ink', 'muted', 'accent'] as const;

let failures = 0;
const rows: string[][] = [];

for (const palette of palettes) {
  for (const role of CHECKED_ROLES) {
    const ratio = contrastRatio(palette[role], palette.ground);
    const pass = ratio >= AA_NORMAL_TEXT;
    if (!pass) failures += 1;
    rows.push([
      palette.id,
      `${role} ${palette[role]} on ${palette.ground}`,
      `${ratio.toFixed(2)}:1`,
      pass ? 'PASS' : `FAIL (< ${AA_NORMAL_TEXT}:1)`,
    ]);
  }
}

const widths = rows[0].map((_, i) => Math.max(...rows.map((r) => r[i].length)));
console.log('\nTheme contrast report (WCAG AA, normal text ≥ 4.5:1)\n');
for (const row of rows) {
  console.log('  ' + row.map((cell, i) => cell.padEnd(widths[i])).join('  '));
}
console.log('');

if (failures > 0) {
  console.error(`✖ ${failures} contrast pair(s) below AA. Fix content/palettes.ts before building.`);
  process.exit(1);
}
console.log(`✓ All ${rows.length} text-on-ground pairs across ${palettes.length} palettes pass AA.`);

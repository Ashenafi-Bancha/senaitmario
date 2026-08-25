// Reports real gzipped first-load JS per route from the production build.
// Run after `next build`: node scripts/report-bundles.mjs
import { readFileSync, statSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { join } from 'node:path';

const BUDGET_KB = 140;
const manifest = JSON.parse(
  readFileSync(join('.next', 'app-build-manifest.json'), 'utf8'),
);

const gzipCache = new Map();
function gzipKb(file) {
  if (!gzipCache.has(file)) {
    const path = join('.next', file);
    try {
      statSync(path);
      gzipCache.set(file, gzipSync(readFileSync(path)).length / 1024);
    } catch {
      gzipCache.set(file, 0);
    }
  }
  return gzipCache.get(file);
}

const rows = [];
for (const [route, files] of Object.entries(manifest.pages)) {
  const jsFiles = files.filter((f) => f.endsWith('.js'));
  const totalKb = jsFiles.reduce((sum, f) => sum + gzipKb(f), 0);
  rows.push({ route, totalKb, count: jsFiles.length });
}
rows.sort((a, b) => b.totalKb - a.totalKb);

console.log(`\nFirst-load JS per route (real gzip, budget ${BUDGET_KB} KB)\n`);
let failures = 0;
for (const { route, totalKb, count } of rows) {
  const over = totalKb > BUDGET_KB;
  if (over) failures += 1;
  console.log(
    `  ${totalKb.toFixed(1).padStart(7)} KB  ${String(count).padStart(2)} files  ${over ? 'OVER ' : 'ok   '} ${route}`,
  );
}
console.log(
  failures
    ? `\n✖ ${failures} route(s) over the ${BUDGET_KB} KB gzip budget.`
    : `\n✓ All routes within the ${BUDGET_KB} KB gzip budget.`,
);
process.exit(failures ? 1 : 0);

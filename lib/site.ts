/**
 * Canonical site origin, in priority order:
 * 1. NEXT_PUBLIC_SITE_URL when set explicitly (e.g. a custom domain),
 * 2. Vercel's auto-provided production domain,
 * 3. localhost for local dev.
 * Used server-side only (metadata, sitemap, robots).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

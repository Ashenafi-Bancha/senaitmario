/** Canonical site origin — set NEXT_PUBLIC_SITE_URL in the deploy environment. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

/**
 * Sliding-window rate limiter, in memory, keyed by IP.
 *
 * Prototype-grade on purpose: on serverless (Vercel) each instance has its
 * own map, so this is best-effort per instance — enough to blunt casual abuse
 * of the contact form without storing any data. Upgrade path for production:
 * a shared store (e.g. Upstash Redis) behind this same function signature.
 */
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const MAX_TRACKED_KEYS = 5_000;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    hits.set(key, recent);
    return true;
  }

  recent.push(now);
  // Crude memory cap: reset rather than grow without bound.
  if (!hits.has(key) && hits.size >= MAX_TRACKED_KEYS) {
    hits.clear();
  }
  hits.set(key, recent);
  return false;
}

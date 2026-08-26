import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { isPendingLocale, routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const segments = request.nextUrl.pathname.split('/').filter(Boolean);
  const [maybeLocale, ...rest] = segments;

  // A pending locale has one page — the "translation in progress" notice —
  // so every deeper path collapses onto its root. Without this the notice
  // would be served under a dozen URLs, each carrying the payload of a page
  // it never displays.
  if (maybeLocale && isPendingLocale(maybeLocale) && rest.length > 0) {
    const url = request.nextUrl.clone();
    url.pathname = `/${maybeLocale}`;
    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}

export const config = {
  // Skip API routes, Next internals and any path with a file extension.
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
};

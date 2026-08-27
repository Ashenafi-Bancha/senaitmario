/**
 * Official social brand marks, inlined as SVG so the site pulls in no icon
 * library and no third-party request.
 *
 * These are trademarks: they are reproduced in their official form and
 * official colours, used solely to link to her own profiles, which is the
 * use each platform's brand guidelines permit. Do not restyle the glyphs,
 * recolour them, or place them on a conflicting background.
 *
 * Each icon is decorative — the accessible name lives on the wrapping link.
 */

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        fill="#1877F2"
        d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073C0 18.063 4.388 23.027 10.125 23.927v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.063 24 12.073Z"
      />
      <path
        fill="#FFFFFF"
        d="m16.671 15.542.532-3.469h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.513V4.996s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.643H7.078v3.469h3.047v8.385a12.09 12.09 0 0 0 3.75 0v-8.385h2.796Z"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  // Instagram's mark uses its official corner-anchored radial gradient.
  const gradientId = 'ig-gradient';
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <radialGradient id={gradientId} cx="0.3" cy="1.05" r="1.3">
          <stop offset="0%" stopColor="#FDD867" />
          <stop offset="20%" stopColor="#FDD867" />
          <stop offset="42%" stopColor="#FA7E1E" />
          <stop offset="62%" stopColor="#D62976" />
          <stop offset="80%" stopColor="#962FBF" />
          <stop offset="100%" stopColor="#4F5BD5" />
        </radialGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"
      />
    </svg>
  );
}

export const BRAND_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
} as const;

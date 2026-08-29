/**
 * Social accounts.
 *
 * Only add an account here once it is CONFIRMED to be hers - a wrong profile
 * linked from her own website sends her audience to a stranger. A `url` of
 * null means "not confirmed yet": the UI still draws the platform's mark, so
 * the design is complete, but it is not clickable and the outstanding item is
 * listed underneath rather than guessed at.
 */
export type SocialPlatform = 'facebook' | 'instagram' | 'whatsapp';

export interface SocialAccount {
  platform: SocialPlatform;
  /** Plain label, also used as the accessible name of the link. */
  label: string;
  /** Canonical profile URL, or null while unconfirmed. */
  url: string | null;
  /** Shown beside the mark only where the design asks for it. */
  handle?: string;
}

/**
 * TODO - CLIENT: her WhatsApp business number, in full international form
 * with no spaces, plus sign or leading zeros. An Italian mobile would look
 * like '393331234567'; an Ethiopian one like '251911234567'.
 *
 * Setting it here is the only change needed: the wa.me link, the mark and its
 * accessible name are all built from it. Leaving it null keeps the mark on the
 * page but not clickable, so no visitor is sent to a wrong number.
 */
export const whatsappNumber: string | null = null;

export const socialAccounts: SocialAccount[] = [
  {
    platform: 'facebook',
    label: 'Facebook',
    // Supplied by the client. Stored in the canonical www form; the
    // web.facebook.com subdomain simply forces the desktop layout.
    url: 'https://www.facebook.com/senait.mario',
    handle: 'senait.mario',
  },
  {
    platform: 'instagram',
    label: 'Instagram',
    // Confirmed by the client. Research could not tie this account to her
    // from public signals alone (it carries no bio), so it is published on
    // the client's confirmation rather than on inference.
    // Stored without the ?igsi= share token the Instagram app appends -
    // that is a per-share tracking identifier, not part of the profile URL.
    url: 'https://www.instagram.com/senaitmario',
    handle: '@senaitmario',
  },
  {
    platform: 'whatsapp',
    label: 'WhatsApp',
    // wa.me is WhatsApp's own click-to-chat host, so this needs no API key
    // and no third-party script.
    url: whatsappNumber ? `https://wa.me/${whatsappNumber}` : null,
  },
];

/** Accounts that are confirmed and safe to link. */
export const confirmedSocialAccounts = socialAccounts.filter(
  (account): account is SocialAccount & { url: string } => account.url !== null,
);

/** Accounts whose mark is drawn but which cannot be linked yet. */
export const pendingSocialAccounts = socialAccounts.filter(
  (account) => account.url === null,
);

export const hasUnconfirmedSocialAccounts = pendingSocialAccounts.length > 0;

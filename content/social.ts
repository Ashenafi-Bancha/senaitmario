/**
 * Social accounts.
 *
 * Only add an account here once it is CONFIRMED to be hers — a wrong profile
 * linked from her own website sends her audience to a stranger. A `url` of
 * null means "not confirmed yet": the UI shows it as an outstanding item
 * rather than guessing a handle from her name.
 */
export type SocialPlatform = 'facebook' | 'instagram';

export interface SocialAccount {
  platform: SocialPlatform;
  /** Plain label, also used as the accessible name of the link. */
  label: string;
  /** Canonical profile URL, or null while unconfirmed. */
  url: string | null;
  /** Shown beside the icon where the design has room for it. */
  handle?: string;
}

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
    // TODO — an account named @senaitmario exists but carries no bio or any
    // other detail tying it to her work, so it is NOT published here. Confirm
    // the handle with her, then fill this in.
    url: null,
  },
];

/** Accounts that are confirmed and safe to link. */
export const confirmedSocialAccounts = socialAccounts.filter(
  (account): account is SocialAccount & { url: string } => account.url !== null,
);

export const hasUnconfirmedSocialAccounts = socialAccounts.some(
  (account) => account.url === null,
);

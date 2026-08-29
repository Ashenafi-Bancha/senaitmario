/**
 * Identity facts. Everything here comes from the client's supplied content —
 * do not add or "improve" biographical details without client confirmation.
 */
export const identity = {
  name: 'Dr. Senait Mario',
  roles: [
    'international fashion designer',
    'model',
    'sociologist',
    'UN Peace Ambassador',
    /*
     * TITLE CONFLICT - CONFIRM WITH DR. MARIO BEFORE LAUNCH.
     * The original brief supplied "founder and CEO"; the client later
     * asked for "founder and general manager". The client's later wording
     * is used here and in every locale's meta description and hero. If CEO
     * is the correct title, change it here and in messages/*.json
     * (meta.description and home.heroRoles).
     */
    "founder and General Manager of Da Mario's Fashion and Technology Institute",
  ],
  based: 'Rome, Italy',
  origin: 'Born and raised in Wolaita Sodo, southern Ethiopia',
  citizenship: 'Italian citizen, Ethiopian by birth',
  /** TODO — contact email to be supplied by client */
  contactEmail: 'TODO',
  /** TODO — booking contact to be supplied by client */
  bookingContact: 'TODO',
  /** TODO — client to supply handles */
  instagram: 'TODO',
  /** TODO — client to supply handles */
  facebook: 'TODO',
} as const;

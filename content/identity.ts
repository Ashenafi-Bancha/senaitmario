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
     * General Manager, not CEO. The original brief said "founder and CEO";
     * the client corrected it and then confirmed the correction. The same
     * wording is used in every locale's meta.description and home.heroRoles,
     * and it feeds the jobTitle in the Person structured data, so change all
     * three together if it ever moves again.
     */
    "founder and General Manager of Da Mario’s Fashion and Technology Institute",
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

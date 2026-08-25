/**
 * Identity facts. Everything here comes from the client's supplied content —
 * do not add or "improve" biographical details without client confirmation.
 */
export const identity = {
  name: 'Dr. Senait Mario',
  roles: [
    'fashion designer',
    'model',
    'sociologist',
    'UN Peace Ambassador',
    "founder and CEO of Da Mario's Fashion and Technology Institute",
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

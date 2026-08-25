/** Kept zod-free: the form renders these options without pulling the schema. */
export const ENQUIRY_TYPES = ['booking', 'press', 'partnership', 'other'] as const;
export type EnquiryType = (typeof ENQUIRY_TYPES)[number];

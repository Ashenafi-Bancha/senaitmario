import * as z from 'zod/mini';
import { ENQUIRY_TYPES } from './enquiry-types';

/**
 * Shared between the client form and the API route — the server re-validates
 * everything. Uses zod/mini (same validation engine, tree-shakable API):
 * classic zod added ~69 KB to /contact's client bundle and broke the 140 KB
 * initial-JS budget. Error messages are message KEYS resolved through
 * next-intl (contact.form.errors.*), so validation is localised.
 *
 * NOTE: the brief specifies exactly these fields (name, organisation, enquiry
 * type, message) — there is deliberately no email/phone field yet. Flagged in
 * the README TODO list: the client must decide how enquirers are answered.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .check(z.trim(), z.minLength(1, 'nameRequired'), z.maxLength(200, 'nameRequired')),
  organisation: z
    .string()
    .check(
      z.trim(),
      z.minLength(1, 'organisationRequired'),
      z.maxLength(200, 'organisationRequired'),
    ),
  enquiryType: z.enum(ENQUIRY_TYPES, 'enquiryTypeRequired'),
  message: z
    .string()
    .check(z.trim(), z.minLength(1, 'messageRequired'), z.maxLength(5000, 'messageTooLong')),
});

export type ContactInput = z.infer<typeof contactSchema>;

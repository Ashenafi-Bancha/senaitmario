import type { Recognition } from './types';

/**
 * ═══════════════════════════════════════════════════════════════════════
 * CONFIRM WITH THE CLIENT BEFORE LAUNCH — READ THIS FIRST.
 * ═══════════════════════════════════════════════════════════════════════
 *
 * A web search (Aug 2026) found NO independent record of any of the three
 * recognitions below. Every mention online traces back to one sentence in a
 * single Addis Standard article of 5 July 2019, and that sentence ends
 * "…she told Addis Standard" — i.e. the paper is reporting her own account,
 * not verifying it.
 *
 * That does not mean the claims are wrong. They are her own statements about
 * her own life and may be fully documented in her files. It does mean the
 * site must not present them as independently established, and that the
 * client should obtain the certificate or letter for each one before launch.
 *
 * Specific issues found, per recognition:
 *
 * 1. 2016 — "Top 40 Women of Africa", MICE award, Ghana.
 *    No awarding body, organiser, ceremony or winners' list found anywhere.
 *    Note: the well-documented "Top 40 Women in MICE Awards" is a SOUTH
 *    AFRICAN programme (Meetings magazine / 3S Media), not Ghanaian, and no
 *    edition of it lists her. Either this is a different, undocumented
 *    Ghanaian award or the country attribution needs correcting.
 *
 * 2. 2017 — UN Peace Ambassador.  ← HIGHEST RISK CLAIM ON THE SITE
 *    No UN body, programme, ceremony or documentation found. The UN's two
 *    formal designations are "Messenger of Peace" and "Goodwill Ambassador";
 *    she appears on neither published roster. Titles worded "UN Peace
 *    Ambassador" / "Ambassador for Peace" are frequently conferred by
 *    NON-UN organisations whose names invoke the UN. Until the conferring
 *    body is named by a document, stating this flatly on her own site is a
 *    real reputational risk for her. Ask for the certificate; then name the
 *    conferring organisation explicitly in the copy.
 *
 * 3. 2019 — Honorary doctorate, Nigeria.
 *    Best supported of the three: two outlets report it. The Nigerian
 *    Tribune (26 July 2019) is the only source naming an institution — the
 *    StayUp Aviation Institute of Technology, at whose aviation seminar she
 *    was honoured — but its sentence is ambiguous about whether that body
 *    actually conferred the degree, and it appears to be a private aviation
 *    training institute in Ibadan rather than an accredited degree-granting
 *    university. ALWAYS present as honorary; never imply an earned research
 *    degree.
 */
export const recognitions: Recognition[] = [
  {
    year: 2016,
    titleKey: 'press.recognition.mice2016.title',
    detailKey: 'press.recognition.mice2016.detail',
    needsConfirmation: true,
  },
  {
    year: 2017,
    titleKey: 'press.recognition.un2017.title',
    detailKey: 'press.recognition.un2017.detail',
    needsConfirmation: true,
  },
  {
    year: 2019,
    titleKey: 'press.recognition.doctorate2019.title',
    detailKey: 'press.recognition.doctorate2019.detail',
    needsConfirmation: true,
  },
];

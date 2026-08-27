/**
 * Her event platforms.
 *
 * RESEARCH NOTE (Aug 2026) — what could and could not be established:
 *
 * "One Peace Fashion" IS her standing event brand. Three independent signals
 * agree: the Nigerian Tribune names the June 2019 Wolaita Sodo event "One
 * Peace Fashion"; her own public Facebook page is titled "Senait Mario ONE
 * PEACE fashion" and has been running since at least April 2014, so the brand
 * predates that show by years; and a 2019 third-party post describes her as
 * its founder. Addis Standard's "Peace Fashion Show" appears to be that
 * paper's rendering of the same event, not a second brand.
 *
 * ONLY ONE EDITION IS DOCUMENTED anywhere in reachable press: Wolaita Sodo,
 * June 2019. The Tribune calls the platform "an annual showcase", but no
 * other edition — before or after — could be found in any source, and there
 * is nothing at all after 2019. So the site names the platform and documents
 * the one edition it can evidence, and asks the client for the rest rather
 * than implying a run of shows that cannot be shown to have happened.
 *
 * The Ethiopian Press Agency piece (press.et/herald/?p=6603) would likely add
 * detail, but the URL now 404s and has no Wayback capture — unrecoverable.
 *
 * "African Fashion Expo" is named by her, once, in the 2019 Addis Standard
 * interview, alongside "Fashion for Peace". No edition, date, city or further
 * detail is published anywhere. It is therefore listed as a named platform
 * only, with no claims attached.
 */

export interface EventEdition {
  id: string;
  /** ISO date, or year-only where the day is not established. */
  date: string;
  city: string;
  country: string;
  /** Message key for the edition's description. */
  bodyKey: string;
  /** Message key for the attendance line, where documented. */
  attendanceKey?: string;
}

export interface EventPlatform {
  id: string;
  name: string;
  /** Message key for what the platform is. */
  descriptionKey: string;
  editions: EventEdition[];
  /** True when the platform is documented by name only, with no edition detail. */
  nameOnly?: boolean;
}

export const eventPlatforms: EventPlatform[] = [
  {
    id: 'one-peace-fashion',
    name: 'One Peace Fashion',
    descriptionKey: 'peace.platforms.onePeace.description',
    editions: [
      {
        id: 'wolaita-sodo-2019',
        date: '2019-06',
        city: 'Wolaita Sodo',
        country: 'Ethiopia',
        bodyKey: 'peace.sodoShowBody',
        attendanceKey: 'peace.sodoShowAttendance',
      },
    ],
  },
  {
    id: 'african-fashion-expo',
    name: 'African Fashion Expo',
    descriptionKey: 'peace.platforms.expo.description',
    editions: [],
    nameOnly: true,
  },
];

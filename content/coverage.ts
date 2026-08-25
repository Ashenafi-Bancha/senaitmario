/**
 * Press coverage — only articles that have been located and READ in full at
 * the URL below. Do not add an entry from a search-result snippet.
 *
 * These two 2019 pieces are, as of the last check, the only substantive
 * press articles about her findable on the open web. Both live URLs block
 * automated readers, so an archive copy is recorded alongside each.
 *
 * NOTE — two details conflict between these sources and must be settled with
 * her before either is stated as fact anywhere on the site:
 *   1. Where she settled: Addis Standard says Rome; the Tribune says Milan.
 *   2. Designers in the June 2019 Wolaita Sodo show: Addis Standard says
 *      eight; the Tribune says six.
 */
export interface CoverageItem {
  title: string;
  outlet: string;
  url: string;
  /** Archive copy — the live URLs 403 automated readers. */
  archiveUrl?: string;
  /** ISO date of publication. */
  date: string;
  language: 'en' | 'am' | 'it';
}

export const coverage: CoverageItem[] = [
  {
    title:
      'Art News: Dr Senait Mario: Promoting the colors of Ethiopia through fashion',
    outlet: 'Addis Standard',
    url: 'https://addisstandard.com/art-news-dr-senait-mario-promoting-the-colors-of-ethiopia-through-fashion/',
    archiveUrl:
      'https://web.archive.org/web/20240625032312/https://addisstandard.com/art-news-dr-senait-mario-promoting-the-colors-of-ethiopia-through-fashion/',
    date: '2019-07-05',
    language: 'en',
  },
  {
    title: 'Senait Mario stokes up African pride with travel fashion show',
    outlet: 'Nigerian Tribune',
    url: 'https://tribuneonlineng.com/senait-mario-stokes-up-african-pride-with-travel-fashion-show-%E2%80%A2says-nigerians-are-hospitable/',
    archiveUrl:
      'https://web.archive.org/web/20251121082101/https://tribuneonlineng.com/senait-mario-stokes-up-african-pride-with-travel-fashion-show-%E2%80%A2says-nigerians-are-hospitable/',
    date: '2019-07-26',
    language: 'en',
  },
  {
    // "The Fashion Ambassador", by Tegegn Biru. Originally Addis Zemen
    // (Ethiopian Press Agency); the primary URL (press.et/ama/?p=50611) is
    // dead after their site rebuild, so the Sewasew republication — which
    // carries the byline, date and source attribution — is cited instead.
    title: 'የፋሽን አምባሳደሯ (The Fashion Ambassador)',
    outlet: 'Addis Zemen / Sewasew',
    url: 'https://am.sewasew.com/p/%E1%8B%A8%E1%8D%8B%E1%88%BD%E1%8A%95-%E1%8A%A0%E1%88%9D%E1%89%A3%E1%88%B3%E1%8B%B0%E1%88%AF',
    date: '2021-07-05',
    language: 'am',
  },
];

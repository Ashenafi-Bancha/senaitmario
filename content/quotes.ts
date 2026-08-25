/**
 * VERBATIM QUOTES — her own published words, each traced to an article that
 * was located and read in full.
 *
 * Rules for this file:
 *  - Never add a sentence she has not been published saying. If there is no
 *    source, there is no quote — use paraphrase in the page copy instead.
 *  - Every entry renders WITH its citation visible on the page, so a reader
 *    can check it.
 *  - Quotes are reproduced from interviews conducted in English; the client
 *    should still confirm each one reads as she intends before launch
 *    (`needsClientConfirmation`).
 */
export interface Quote {
  id: string;
  /** Her exact published words, without surrounding quotation marks. */
  text: string;
  outlet: string;
  url: string;
  /** ISO date of the article. */
  date: string;
  /** True until the client signs the quote off for publication. */
  needsClientConfirmation: boolean;
}

export const quotes: Record<string, Quote> = {
  peace: {
    id: 'peace',
    text: 'We can promote peace and unity through fashion',
    outlet: 'Nigerian Tribune',
    url: 'https://tribuneonlineng.com/senait-mario-stokes-up-african-pride-with-travel-fashion-show-%E2%80%A2says-nigerians-are-hospitable/',
    date: '2019-07-26',
    needsClientConfirmation: true,
  },
  colour: {
    id: 'colour',
    text: 'I promote Ethiopia through the colors I use in my fashion collections',
    outlet: 'Addis Standard',
    url: 'https://addisstandard.com/art-news-dr-senait-mario-promoting-the-colors-of-ethiopia-through-fashion/',
    date: '2019-07-05',
    needsClientConfirmation: true,
  },
  purpose: {
    id: 'purpose',
    text: 'My target is to promote Ethiopia in fashion industry and at the same time to bring investments to Ethiopia so as to help youth empowerment.',
    outlet: 'Addis Standard',
    url: 'https://addisstandard.com/art-news-dr-senait-mario-promoting-the-colors-of-ethiopia-through-fashion/',
    date: '2019-07-05',
    needsClientConfirmation: true,
  },
};

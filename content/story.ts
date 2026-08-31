import type { StoryChapter } from './types';

/**
 * The arc: Wolaita Sodo → Nairobi → Kampala → Rome → the stages of Milan,
 * London and Paris → back to Addis Ababa. Editorial chapters, each owning a
 * colour field. The return to Addis is the resolution.
 *
 * Chapter images show the places themselves; none of them depicts Senait
 * Mario. Five were supplied by the client on 2026-08-31 and their source and
 * licence are NOT YET KNOWN - they carry `credit: 'TODO'` until that is
 * settled, which is why RIGHTS.md still lists them as UNCLEARED. Addis Ababa
 * is still an openly-licensed Wikimedia placeholder and prints its attribution
 * on the page, as its licence requires.
 *
 * The client asked for no caption under the pictures they supplied, so those
 * set `showCredit: false`. That hides the line; it does not settle the rights.
 */
export const storyChapters: StoryChapter[] = [
  {
    id: 'sodo',
    place: 'Wolaita Sodo',
    paletteId: 'ivory',
    titleKey: 'story.chapters.sodo.title',
    bodyKey: 'story.chapters.sodo.body',
    images: [
      {
        src: '/images/story/sodo.jpg',
        width: 1683,
        height: 935,
        alt: 'The “I love Wolaita” landmark sign in Wolaita Sodo, the highlands rising behind it',
        credit: 'TODO',
        showCredit: false,
      },
    ],
  },
  {
    id: 'nairobi',
    place: 'Nairobi',
    paletteId: 'ivory',
    titleKey: 'story.chapters.nairobi.title',
    bodyKey: 'story.chapters.nairobi.body',
    images: [
      {
        src: '/images/story/nairobi.jpg',
        width: 2000,
        height: 1333,
        alt: 'The central business district of Nairobi seen from above, towers running to the horizon',
        credit: 'TODO',
        showCredit: false,
      },
    ],
  },
  {
    id: 'kampala',
    place: 'Kampala',
    paletteId: 'ivory',
    titleKey: 'story.chapters.kampala.title',
    bodyKey: 'story.chapters.kampala.body',
    images: [
      {
        src: '/images/story/kampala.jpg',
        width: 1800,
        height: 830,
        alt: 'Kampala seen across the green of a city park, office towers along the skyline',
        credit: 'TODO',
        showCredit: false,
      },
    ],
  },
  {
    id: 'rome',
    place: 'Rome',
    paletteId: 'ivory',
    titleKey: 'story.chapters.rome.title',
    bodyKey: 'story.chapters.rome.body',
    images: [
      {
        src: '/images/story/rome.jpg',
        width: 800,
        height: 530,
        alt: 'St Peter’s Basilica at the end of Via della Conciliazione, Rome, lit at dusk',
        credit: 'TODO',
        showCredit: false,
      },
    ],
  },
  {
    id: 'stages',
    place: 'Milan · London · Paris',
    paletteId: 'ivory',
    titleKey: 'story.chapters.stages.title',
    bodyKey: 'story.chapters.stages.body',
    images: [
      {
        src: '/images/story/stages.jpg',
        width: 2000,
        height: 1333,
        alt: 'Regent Street in London hung with Union flags, red buses along the curve',
        credit: 'TODO',
        showCredit: false,
      },
      {
        src: '/images/story/paris.jpg',
        width: 605,
        height: 507,
        alt: 'The Eiffel Tower seen from the Trocadéro gardens, Paris',
        credit: 'TODO',
        showCredit: false,
        // 605px is small; it holds at the second look's size but would be soft
        // if it ever led a chapter.
      },
    ],
  },
  {
    // The resolution returns to the primary ground.
    id: 'addis',
    place: 'Addis Ababa',
    paletteId: 'ivory',
    titleKey: 'story.chapters.addis.title',
    bodyKey: 'story.chapters.addis.body',
    images: [
      {
        src: '/images/story/addis.jpg',
        width: 1600,
        height: 900,
        alt: 'Construction crane silhouetted against sunset over Addis Ababa, placeholder image',
        credit: 'Jean Rebiffé, CC BY 2.0, via Wikimedia Commons',
      },
    ],
  },
];

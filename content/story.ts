import type { StoryChapter } from './types';

/**
 * The arc: Wolaita Sodo → Nairobi → Kampala → Rome → the stages of Milan,
 * London and Paris → back to Addis Ababa. Editorial chapters, each owning a
 * colour field. The return to Addis is the resolution.
 *
 * Chapter images are LICENSED STOCK PLACEHOLDERS (Wikimedia Commons, credited)
 * showing the places themselves — to be replaced with her real photography.
 * None of them depicts Senait Mario. See RIGHTS.md.
 */
export const storyChapters: StoryChapter[] = [
  {
    id: 'sodo',
    place: 'Wolaita Sodo',
    paletteId: 'evergreen',
    titleKey: 'story.chapters.sodo.title',
    bodyKey: 'story.chapters.sodo.body',
    image: {
      src: '/images/story/sodo.jpg',
      width: 1600,
      height: 1115,
      alt: 'Street view of Wolaita Sodo, southern Ethiopia — placeholder image',
      credit: 'Bernard Gagnon, CC BY-SA 3.0, via Wikimedia Commons',
    },
  },
  {
    id: 'nairobi',
    place: 'Nairobi',
    paletteId: 'evergreen-light',
    titleKey: 'story.chapters.nairobi.title',
    bodyKey: 'story.chapters.nairobi.body',
    image: {
      src: '/images/story/nairobi.jpg',
      width: 1600,
      height: 900,
      alt: 'Nairobi skyline rising beyond the savannah of Nairobi National Park — placeholder image',
      credit: 'Timothy A. Gonsalves, CC BY-SA 4.0, via Wikimedia Commons',
    },
  },
  {
    id: 'kampala',
    place: 'Kampala',
    paletteId: 'evergreen-deep',
    titleKey: 'story.chapters.kampala.title',
    bodyKey: 'story.chapters.kampala.body',
    image: {
      src: '/images/story/kampala.jpg',
      width: 1600,
      height: 1200,
      alt: 'Kampala skyline at dusk seen across green wetland — placeholder image',
      credit: 'Todd Huffman, CC BY 2.0, via Wikimedia Commons',
    },
  },
  {
    id: 'rome',
    place: 'Rome',
    paletteId: 'evergreen-light',
    titleKey: 'story.chapters.rome.title',
    bodyKey: 'story.chapters.rome.body',
    image: {
      src: '/images/story/rome.jpg',
      width: 1600,
      height: 805,
      alt: "St. Peter's Basilica and Ponte Sant'Angelo over the Tiber at dusk, Rome — placeholder image",
      credit: 'Jebulon, CC0, via Wikimedia Commons',
    },
  },
  {
    id: 'stages',
    place: 'Milan · London · Paris',
    paletteId: 'evergreen-deep',
    titleKey: 'story.chapters.stages.title',
    bodyKey: 'story.chapters.stages.body',
    image: {
      src: '/images/story/stages-milan.jpg',
      width: 1600,
      height: 1067,
      alt: 'Galleria Vittorio Emanuele II in Milan at night — placeholder image',
      credit: 'Maurizio Moro5153, CC BY-SA 4.0, via Wikimedia Commons',
    },
  },
  {
    // The resolution returns to the primary ground.
    id: 'addis',
    place: 'Addis Ababa',
    paletteId: 'evergreen',
    titleKey: 'story.chapters.addis.title',
    bodyKey: 'story.chapters.addis.body',
    image: {
      src: '/images/story/addis.jpg',
      width: 1600,
      height: 900,
      alt: 'Construction crane silhouetted against sunset over Addis Ababa — placeholder image',
      credit: 'Jean Rebiffé, CC BY 2.0, via Wikimedia Commons',
    },
  },
];

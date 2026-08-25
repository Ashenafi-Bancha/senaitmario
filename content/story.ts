import type { StoryChapter } from './types';

/**
 * The arc: Wolaita Sodo → Nairobi → Kampala → Rome → the stages of Milan,
 * London and Paris → back to Addis Ababa. Editorial chapters, each owning a
 * colour field. The return to Addis is the resolution.
 */
export const storyChapters: StoryChapter[] = [
  {
    id: 'sodo',
    place: 'Wolaita Sodo',
    paletteId: 'evergreen',
    titleKey: 'story.chapters.sodo.title',
    bodyKey: 'story.chapters.sodo.body',
  },
  {
    id: 'nairobi',
    place: 'Nairobi',
    paletteId: 'evergreen-light',
    titleKey: 'story.chapters.nairobi.title',
    bodyKey: 'story.chapters.nairobi.body',
  },
  {
    id: 'kampala',
    place: 'Kampala',
    paletteId: 'evergreen-deep',
    titleKey: 'story.chapters.kampala.title',
    bodyKey: 'story.chapters.kampala.body',
  },
  {
    id: 'rome',
    place: 'Rome',
    paletteId: 'evergreen-light',
    titleKey: 'story.chapters.rome.title',
    bodyKey: 'story.chapters.rome.body',
  },
  {
    id: 'stages',
    place: 'Milan · London · Paris',
    paletteId: 'evergreen-deep',
    titleKey: 'story.chapters.stages.title',
    bodyKey: 'story.chapters.stages.body',
  },
  {
    // The resolution returns to the primary ground.
    id: 'addis',
    place: 'Addis Ababa',
    paletteId: 'evergreen',
    titleKey: 'story.chapters.addis.title',
    bodyKey: 'story.chapters.addis.body',
  },
];

import type { Recognition } from './types';

/**
 * IMPORTANT — CONFIRM BEFORE LAUNCH:
 * The exact awarding body and full official title for EACH of these three
 * recognitions must be confirmed with the client before this site goes live.
 * The 2019 doctorate is HONORARY and must always be presented as such — never
 * imply an earned research degree.
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

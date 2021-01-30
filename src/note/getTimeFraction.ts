import { getEndTime } from './getEndTime';
import { Note } from './makeNote';

/**
 * Returns the fraction of the note that has been played at given time
 */
export const getTimeFraction = (time: number, note: Note): number => {
  const min = note.time;
  const max = getEndTime(note);

  return (time - min) / (max - min);
};

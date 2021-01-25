import { getEndTime } from './getEndTime';
import { Note } from './makeNote';

/**
 * Returns the time of the last note off.
 */
export const getTotalTime = (notes: Array<Note>): number => {
  return Math.max(...notes.map(getEndTime));
};

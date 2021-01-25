import { getEndTime } from './getEndTime';
import { Note } from './makeNote';

const lerp = (a: number, b: number, n: number) => {
  return (1 - n) * a + n * b;
};

/**
 * Returns the time corresponding to the given note's fraction
 */
export const getFractionTime = (fraction: number, note: Note): number => {
  return lerp(note.time, getEndTime(note), fraction);
};

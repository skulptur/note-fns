import { getFractionTime } from './getFractionTime';
import { Note } from './makeNote';
import { recursiveGenerate } from './recursiveGenerate';
import { splitNote } from './splitNote';

/**
 * Recursively splits a note into more notes
 */
export const recursiveSplit = (
  getFraction: (depth: number, index: number, note: Note) => number,
  iterations: number,
  note: Note
) => {
  return recursiveGenerate(
    (depth, index, currentNote) => {
      const fraction = getFraction(depth, index, currentNote);
      const time = getFractionTime(fraction, currentNote);
      return splitNote(time, currentNote);
    },
    iterations,
    note
  );
};

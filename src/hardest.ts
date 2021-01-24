// @ts-ignore
import { curry } from 'ramda';
import { isHarder } from './isHarder';
import { Note } from './makeNote';

/**
 * Returns the hardest note.
 */
export const hardest = curry(
  (noteA: Note, noteB: Note): Note => {
    return isHarder(noteA, noteB) ? noteA : noteB;
  }
);

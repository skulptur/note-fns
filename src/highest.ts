import { curry } from 'ramda';
import { isHigher } from './isHigher';
import { Note } from './makeNote';

/**
 * Returns the note with highest pitch
 */
export const highest = curry(
  (noteA: Note, noteB: Note): Note => {
    return isHigher(noteA, noteB) ? noteA : noteB;
  }
);

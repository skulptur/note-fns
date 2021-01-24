// @ts-ignore
import { curry } from 'ramda';
import { isLonger } from './isLonger';
import { Note } from './makeNote';

/**
 * Returns the longest note.
 */
export const longest = curry(
  (noteA: Note, noteB: Note): Note => {
    return isLonger(noteA, noteB) ? noteA : noteB;
  }
);

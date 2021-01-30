// @ts-ignore
import { curry } from 'ramda';
import { isLonger } from '../predicates/isLonger';
import { Note } from '../note/makeNote';

/**
 * Returns the longest note.
 */
export const longest = curry(
  (noteA: Note, noteB: Note): Note => {
    return isLonger(noteA, noteB) ? noteA : noteB;
  }
);

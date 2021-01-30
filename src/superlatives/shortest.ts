import { curry } from 'ramda';
import { isLonger } from '../predicates/isLonger';
import { Note } from '../note/makeNote';

/**
 * Returns the shortest note.
 */
export const shortest = curry(
  (noteA: Note, noteB: Note): Note => {
    return isLonger(noteA, noteB) ? noteA : noteB;
  }
);

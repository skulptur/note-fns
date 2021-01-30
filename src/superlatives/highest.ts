import { curry } from 'ramda';
import { isHigher } from '../predicates/isHigher';
import { Note } from '../note/makeNote';

/**
 * Returns the note with highest pitch
 */
export const highest = curry(
  (noteA: Note, noteB: Note): Note => {
    return isHigher(noteA, noteB) ? noteA : noteB;
  }
);

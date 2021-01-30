import { curry } from 'ramda';
import { isSofter } from '../predicates/isSofter';
import { Note } from '../note/makeNote';

/**
 * Returns the softest note.
 */
export const softest = curry(
  (noteA: Note, noteB: Note): Note => {
    return isSofter(noteA, noteB) ? noteA : noteB;
  }
);

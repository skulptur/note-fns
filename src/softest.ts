import { curry } from 'lodash';
import { isSofter } from './isSofter';
import { Note } from './makeNote';

/**
 * Returns the softest note.
 */
export const softest = curry(
  (noteA: Note, noteB: Note): Note => {
    return isSofter(noteA, noteB) ? noteA : noteB;
  }
);

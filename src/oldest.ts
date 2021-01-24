import { curry } from 'ramda';
import { isOlder } from './isOlder';
import { Note } from './makeNote';

/**
 * Returns the note with oldest start time.
 */
export const oldest = curry(
  (noteA: Note, noteB: Note): Note => {
    return isOlder(noteA, noteB) ? noteA : noteB;
  }
);

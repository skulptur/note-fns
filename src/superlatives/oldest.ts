import { curry } from 'ramda';
import { isOlder } from '../predicates/isOlder';
import { Note } from '../noteOperators/makeNote';

/**
 * Returns the note with oldest start time.
 */
export const oldest = curry(
  (noteA: Note, noteB: Note): Note => {
    return isOlder(noteA, noteB) ? noteA : noteB;
  }
);

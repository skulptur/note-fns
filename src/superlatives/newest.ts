import { curry } from 'ramda';
import { isNewer } from '../predicates/isNewer';
import { Note } from '../noteOperators/makeNote';

/**
 * Returns the note with latest start time.
 */
export const newest = curry(
  (noteA: Note, noteB: Note): Note => {
    return isNewer(noteA, noteB) ? noteA : noteB;
  }
);

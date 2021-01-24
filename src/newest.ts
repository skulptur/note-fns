import { curry } from 'lodash';
import { Note } from './makeNote';

/**
 * Returns the note with latest start time.
 */
export const newest = curry(
  (noteA: Note, noteB: Note): Note => {
    return noteA.time > noteB.time ? noteA : noteB;
  }
);

import { curry } from 'ramda';
import { Note } from './makeNote';

/**
 * Is noteA's time before noteB's time
 */
export const isOlder = curry(
  (noteA: Note, noteB: Note): Boolean => {
    return noteA.time < noteB.time;
  }
);

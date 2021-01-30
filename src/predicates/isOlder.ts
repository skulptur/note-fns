import { curry } from 'ramda';
import { Note } from '../note/makeNote';

/**
 * Is noteA's time before noteB's time
 */
export const isOlder = curry(
  (noteA: Note, noteB: Note): Boolean => {
    return noteA.time < noteB.time;
  }
);

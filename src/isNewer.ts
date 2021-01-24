import { curry } from 'lodash';
import { Note } from './makeNote';

/**
 * Is noteA's time after noteB's time
 */
export const isNewer = curry(
  (noteA: Note, noteB: Note): Boolean => {
    return noteA.time < noteB.time;
  }
);

import { curry } from 'lodash';
import { Note } from './makeNote';

/**
 * Is noteA's velocity greater than noteB's velocity
 */
export const isHarder = curry((noteA: Note, noteB: Note): boolean => {
  return noteA.velocity > noteB.velocity;
});

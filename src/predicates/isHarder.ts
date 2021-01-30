import { curry } from 'ramda';
import { Note } from '../note/makeNote';

/**
 * Is noteA's velocity greater than noteB's velocity
 */
export const isHarder = curry((noteA: Note, noteB: Note): boolean => {
  return noteA.velocity > noteB.velocity;
});

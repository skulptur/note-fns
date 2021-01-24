import { curry } from 'lodash';
import { Note } from './makeNote';

/**
 * Is noteA's velocity smaller than noteB's velocity
 */
export const isSofter = curry((noteA: Note, noteB: Note): boolean => {
  return noteA.velocity < noteB.velocity;
});

import { curry } from 'lodash';
import { Note } from './makeNote';

/**
 * Is noteA's duration shorter than noteB's duration
 */
export const isShorter = curry((noteA: Note, noteB: Note): boolean => {
  return noteA.duration < noteB.duration;
});

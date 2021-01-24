import { curry } from 'ramda';
import { Note } from './makeNote';

/**
 * Is noteA's duration longer than noteB's duration
 */
export const isLonger = curry((noteA: Note, noteB: Note): boolean => {
  return noteA.duration > noteB.duration;
});

import { curry } from 'ramda';
// @ts-ignore
import { noteToMidi } from 'music-fns';
import { Note } from './makeNote';

/**
 * Is noteA's pitch higher than noteB's pitch
 */
export const isHigher = curry((noteA: Note, noteB: Note): boolean => {
  return noteToMidi(noteA.name) > noteToMidi(noteB.name);
});

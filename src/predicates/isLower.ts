import { curry } from 'ramda';
// @ts-ignore
import { noteToMidi } from 'music-fns';
import { Note } from '../note/makeNote';

/**
 * Is noteA's pitch lower than noteB's pitch
 */
export const isLower = curry((noteA: Note, noteB: Note): boolean => {
  return noteToMidi(noteA.name) < noteToMidi(noteB.name);
});

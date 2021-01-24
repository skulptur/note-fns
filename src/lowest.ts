import { curry } from 'lodash';
// @ts-ignore
import { noteToMidi } from 'music-fns';
import { isLower } from './isLower';
import { Note } from './makeNote';

/**
 * Returns the note with lowest pitch.
 */
export const highest = curry(
  (noteA: Note, noteB: Note): Note => {
    return isLower(noteA, noteB) ? noteA : noteB;
  }
);

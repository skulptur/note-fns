import { curry } from 'ramda';
// @ts-ignore
import { noteToMidi } from 'music-fns';
import { Note } from '../index';
import { getNameFromMidi } from '../utils/getNameFromMidi';

/**
 * Offsets a notes pitch by the amount of specified semitones.
 */
export const offsetPitch = curry(
  (semitones: number, note: Note): Note => {
    const midi = noteToMidi(note.name);
    return {
      ...note,
      name: getNameFromMidi(midi + semitones),
    };
  }
);

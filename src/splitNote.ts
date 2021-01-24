import { curry, times } from 'lodash';
import { Note } from './makeNote';

// TODO: split parts // so we can get multiple array of notes based on a given time
// TODO: allow splitting notes with a sampling function (from unit-fns!!!)

// takes a note and splits into n notes evenly

/**
 * Takes a note and splits it evenly into multiple notes.
 */
export const splitNote = curry(
  (n: number, note: Note): Array<Note> => {
    const newDuration = note.duration / n;

    return times(n, i => {
      return {
        ...note,
        duration: newDuration,
        time: note.time + newDuration * i,
      };
    });
  }
);

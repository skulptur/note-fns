import { curry } from 'ramda';
import { Note } from './makeNote';
import { splitNote } from './splitNote';

/**
 * Splits a note into count amount of notes evenly
 */
export const evenlySplitNote = curry(
  (count: number, note: Note): Array<Note> => {
    const newDuration = note.duration / count;

    return Array.from<Note>(Array(count)).reduce((acc, _unused, index) => {
      const time = note.time + newDuration * index;
      // mutation alert, intentionally remove last item
      const last = acc.pop();
      const parts = splitNote(time, last || note);

      return acc.concat(parts);
    }, [] as Array<Note>);
  }
);

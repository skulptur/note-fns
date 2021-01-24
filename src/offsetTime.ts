import { curry } from 'ramda';
import { Note } from './makeNote';
import { setTime } from './setTime';

/**
 * Offsets a notes time by the specified amount.
 */
export const offsetTime = curry(
  (amount: number, note: Note): Note => {
    return setTime(note.time + amount, note);
  }
);

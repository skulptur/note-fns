import { curry } from 'ramda';
import { Note } from '../noteOperators/makeNote';

/**
 * Returns true if the note is playing at the specified time.
 */
export const isPlayingAt = curry((time: number, note: Note): boolean => {
  return (
    note.time <= time && note.time + note.duration >= time && note.duration > 0
  );
});

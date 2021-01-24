import { curry } from 'ramda';
import { getNotes } from './getNotes';
import { isPlayingAt } from './isPlayingAt';
import { Clip } from './makeClip';
import { Note } from './makeNote';

/**
 * Returns the active notes at the specified time.
 */
export const getNotesAt = curry(
  (time: number, clipOrNotes: Clip | Array<Note>): Array<Note> => {
    return getNotes(clipOrNotes).filter(isPlayingAt(time));
  }
);

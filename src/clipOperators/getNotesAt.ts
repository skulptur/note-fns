import { curry } from 'ramda';
import { getNotes } from './getNotes';
import { isPlayingAt } from '../predicates/isPlayingAt';
import { Clip } from './makeClip';
import { Note } from '../noteOperators/makeNote';

/**
 * Returns the active notes at the specified time.
 */
export const getNotesAt = curry(
  (time: number, clipOrNotes: Clip | Array<Note>): Array<Note> => {
    return getNotes(clipOrNotes).filter(isPlayingAt(time));
  }
);

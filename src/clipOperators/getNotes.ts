import { isClip } from '../predicates/isClip';
import { Clip } from './makeClip';
import { Note } from '../noteOperators/makeNote';

// TODO: make exclusive to clip
export const getNotes = (clipOrNotes: Clip | Array<Note>): Array<Note> => {
  return isClip(clipOrNotes)
    ? clipOrNotes.notes.concat()
    : clipOrNotes.concat();
};

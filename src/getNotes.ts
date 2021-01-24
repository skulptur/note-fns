import { isClip } from './isClip';
import { Clip } from './makeClip';
import { Note } from './makeNote';

export const getNotes = (clipOrNotes: Clip | Array<Note>): Array<Note> => {
  return isClip(clipOrNotes)
    ? clipOrNotes.notes.concat()
    : clipOrNotes.concat();
};

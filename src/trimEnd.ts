import { isNote } from './isNote';
import { isClip } from './isClip';
import { Clip, makeClip } from './makeClip';
import { makeNote, Note } from './makeNote';

const trimEndNote = (endTime: number, note: Note): Note => {
  return makeNote({
    ...note,
    endTime: Math.min(endTime, note.time + note.duration),
  });
};

const trimEndNotes = (endTime: number, notes: Array<Note>): Array<Note> => {
  return notes.map(note => {
    return trimEndNote(endTime, note);
  });
};

const trimEndClip = (endTime: number, clip: Clip): Clip => {
  return makeClip({
    ...clip,
    duration: Math.min(endTime, clip.duration),
    notes: trimEndNotes(endTime, clip.notes),
  });
};

export const trimEnd = <T extends Clip | Array<Note> | Note>(
  endTime: number,
  clipOrNotesOrNote: T
): T => {
  if (isNote(clipOrNotesOrNote)) {
    return trimEndNote(endTime, clipOrNotesOrNote) as T;
  }

  if (isClip(clipOrNotesOrNote)) {
    return trimEndClip(endTime, clipOrNotesOrNote) as T;
  }

  return trimEndNotes(endTime, clipOrNotesOrNote as Array<Note>) as T;
};

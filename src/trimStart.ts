import { isNote } from './predicates/isNote';
import { isClip } from './predicates/isClip';
import { Clip, makeClip } from './clipOperators/makeClip';
import { makeNote, Note } from './noteOperators/makeNote';

const trimStartNote = (time: number, note: Note): Note => {
  return makeNote({
    ...note,
    time: Math.max(time, note.time),
    endTime: note.time + note.duration,
  });
};

const trimStartNotes = (time: number, notes: Array<Note>): Array<Note> => {
  return notes.map(note => {
    return trimStartNote(time, note);
  });
};

const trimStartClip = (time: number, clip: Clip): Clip => {
  // TODO: when startTime is added to clip as well this should be updated
  return makeClip({
    ...clip,
    notes: trimStartNotes(time, clip.notes),
  });
};

// TODO: figure out curry
export const trimStart = <T extends Clip | Array<Note> | Note>(
  time: number,
  clipOrNotesOrNote: T
): T => {
  if (isNote(clipOrNotesOrNote)) {
    return trimStartNote(time, clipOrNotesOrNote) as T;
  }

  if (isClip(clipOrNotesOrNote)) {
    return trimStartClip(time, clipOrNotesOrNote) as T;
  }

  return trimStartNotes(time, clipOrNotesOrNote as Array<Note>) as T;
};

import { trimEnd } from '../trimEnd';
import { getNotes } from './getNotes';
import { getNotesAt } from './getNotesAt';
import { Clip, makeClip } from './makeClip';
import { Note } from '../note/makeNote';

/**
 * Limits the maximum number of notes playing simultaneously.
 * Decides on which notes to prevent from playing, if any, via a reducer function that gets called every time a new note plays with notes playing at that time.
 */
export const limitPolyphony = (
  reducer: (playingNotes: Array<Note>) => Array<Note>,
  clip: Clip
): Clip => {
  return makeClip({
    ...clip,
    notes: getNotes(clip).reduce((notes, note) => {
      const playingNotes = getNotesAt(note.time, notes);
      const notesToAllow = reducer(playingNotes);

      // trim notes that aren't in notesToAllow
      const trimmedNotes = notes.map(noteThatMightGetTrimmed => {
        return notesToAllow.includes(noteThatMightGetTrimmed)
          ? noteThatMightGetTrimmed
          : trimEnd(note.time, noteThatMightGetTrimmed);
      });

      // only add note if it's in notesToAllow
      const stuff = notesToAllow.includes(note)
        ? [...trimmedNotes, note]
        : notes;

      return stuff;
    }, [] as Array<Note>),
  });
};

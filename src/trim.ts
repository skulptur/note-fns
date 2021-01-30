import { Note } from './note/makeNote';
import { Clip } from './clip/makeClip';
import { trimStart } from './trimStart';
import { trimEnd } from './trimEnd';

/**
 * Curried function that takes a min time, a max time and a note. If the note is outside that range returns a None.
 * Otherwise returns Some with a new note's time clamped between min and max.
 */
export const trim = <T extends Clip | Array<Note> | Note>(
  startTime: number,
  endTime: number,
  clipOrNotesOrNote: Clip | Array<Note> | Note
): T => {
  return trimEnd(endTime, trimStart(startTime, clipOrNotesOrNote)) as T;
};

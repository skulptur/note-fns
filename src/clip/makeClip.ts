import { getTotalTime } from '../note/getTotalTime';
import { Note } from '../note/makeNote';

type ClipOptions = Partial<{
  notes: Array<Note>;
  duration: number;
}>;

export type Clip = {
  _tag: 'Clip';
  duration: number;
  notes: Array<Note>;
  map: (notesMap: (notes: Array<Note>) => Array<Note>) => Clip;
};

// TODO: I'm making a poor man's implementation of Monad for clip... ideally this should be refactored to be fully compatible with fp-ts and use its goodness

export const makeClip = (options: ClipOptions = {}): Clip => {
  const {
    duration = options.notes ? getTotalTime(options.notes) : 0,
    notes = [],
  } = options;

  return {
    _tag: 'Clip',
    duration,
    notes,
    map: notesMap => {
      return makeClip({
        ...options,
        notes: notesMap(notes),
      });
    },
  };
};

// for now hardcoded to work with notes only, but Clip could eventually be a more generic abstraction for a container with duration (and start time later)
export const of = (noteOrNotes: Array<Note> | Note) => {
  return makeClip({
    notes: Array.isArray(noteOrNotes) ? noteOrNotes : [noteOrNotes],
  });
};

// extracts the notes out of the clip
export const flatten = (clip: Clip): Array<Note> => {
  return clip.notes;
};

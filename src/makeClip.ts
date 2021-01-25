import { getTotalTime } from './getTotalTime';
import { Note } from './makeNote';

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

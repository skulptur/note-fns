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
  map: (mapper: (note: Note, index: number) => Note) => Clip;
  flatMap: (
    mapper: (note: Note, index: number) => Note | Array<Note> | Clip
  ) => Clip;
  toArray: () => Array<Note>;
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
    map: mapper => {
      return makeClip({
        notes: notes.map(mapper),
        duration,
      });
    },
    flatMap: mapper => {
      return makeClip({
        notes: notes.flatMap((note, index) => {
          const clipOrNote = mapper(note, index);
          return 'notes' in clipOrNote ? clipOrNote.notes : clipOrNote;
        }),
        duration,
      });
    },
    toArray: () => {
      return notes.concat();
    },
  };
};

import { Clip } from './makeClip';
import { Note } from './makeNote';

export const filter = (
  predicate: (note: Note, index: number, notes: Array<Note>) => boolean,
  clip: Clip
) => {
  return clip.map(notes => {
    return notes.filter(predicate);
  });
};

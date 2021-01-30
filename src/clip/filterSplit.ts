import { filter } from './filter';
import { Clip } from './makeClip';
import { Note } from '../note/makeNote';

export const filterSplit = (
  predicate: (note: Note, index: number, notes: Array<Note>) => boolean,
  clip: Clip
) => {
  const positiveSide = filter(predicate, clip);
  const negativeSide = filter(note => !positiveSide.notes.includes(note), clip);

  return [positiveSide, negativeSide] as const;
};

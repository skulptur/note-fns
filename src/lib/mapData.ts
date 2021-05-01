import { ExtractData } from './types/types';
import { Note } from './types/Note';

export const mapData = <T extends Note>(
  note: T,
  fn: (data: ExtractData<T>) => ExtractData<T>
) => {
  return {
    ...note,
    data: fn(note.data as ExtractData<T>),
  };
};

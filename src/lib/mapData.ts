import { Note, ExtractData } from './types';

export const mapData = <T extends Note>(
  note: T,
  fn: (data: ExtractData<T>) => ExtractData<T>
) => {
  return {
    ...note,
    data: fn(note.data as ExtractData<T>),
  };
};

import { ExtractValue } from './types/types';
import { Note } from './types/Note';

export const mapRange = <T extends Note>(
  note: T,
  fn: (value: ExtractValue<T>) => ExtractValue<T>
) => {
  return {
    ...note,
    value: fn(note.value as ExtractValue<T>),
  };
};

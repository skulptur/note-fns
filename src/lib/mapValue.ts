import { Note, ExtractValue } from './types';

export const mapValue = <T extends Note>(
  note: T,
  fn: (value: ExtractValue<T>) => ExtractValue<T>
) => {
  return {
    ...note,
    value: fn(note.value as ExtractValue<T>),
  };
};

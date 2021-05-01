import { ExtractValue, NoteContainer } from './types/NoteContainer';

export const mapValue = <T extends NoteContainer>(
  note: T,
  fn: (value: ExtractValue<T>) => ExtractValue<T>
) => {
  return {
    ...note,
    value: fn(note.value as ExtractValue<T>),
  };
};

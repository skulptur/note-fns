import { Note } from '../noteOperators/makeNote';

export const isNote = (val: unknown): val is Note => {
  return (val as Note)._tag === 'Note';
};

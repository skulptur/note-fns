import { Intervals } from './types/types';

export const ionian: Intervals = [2, 2, 1, 2, 2, 2, 1] as const;
export const dorian: Intervals = [2, 1, 2, 2, 2, 1, 2] as const;
export const phrygian: Intervals = [1, 2, 2, 2, 1, 2, 2] as const;
export const lydian: Intervals = [2, 2, 2, 1, 2, 2, 1] as const;
export const mixolydian: Intervals = [2, 2, 1, 2, 2, 1, 2] as const;
export const aeolian: Intervals = [2, 1, 2, 2, 1, 2, 2] as const;
export const locrian: Intervals = [1, 2, 2, 1, 2, 2, 2] as const;

export const Mode = {
  ionian,
  dorian,
  phrygian,
  lydian,
  mixolydian,
  aeolian,
  locrian,
};

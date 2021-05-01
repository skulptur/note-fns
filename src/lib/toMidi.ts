import { Midi } from './types/Midi';

export const toMidi = (n: number): Midi => {
  return Math.max(0, Math.min(127, Math.round(n))) as Midi;
};

import { Hertz } from './types/Hertz';
import { NoteName } from './types/NoteName';
import { noteNameOffsets } from './noteNameOffsets';
import {
  defaultMiddleAFrequency,
  getMiddleCFrequency,
  middleOctave,
} from './getMiddleCFrequency';

export const noteNameToFrequency = (
  name: NoteName,
  middleAFrequency: Hertz = defaultMiddleAFrequency as Hertz
): Hertz => {
  const couple = name.split(/(\d+)/);
  const distance = noteNameOffsets[couple[0] as NoteName];
  const octaveDiff = (parseInt(couple[1], 10) || middleOctave) - middleOctave;
  const freq =
    getMiddleCFrequency(middleAFrequency) *
    Math.pow(Math.pow(2, 1 / 12), distance);
  return (freq * Math.pow(2, octaveDiff)) as Hertz;
};

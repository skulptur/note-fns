import { Clip, makeClip } from './makeClip';
import { offsetTime } from '../noteOperators/offsetTime';

// TODO: might be too specific to include as is... should not use Math.random and instead use a provided function which could be a seed random or anything else
// also should allow changing other things than just time
// TODO: make it bidirectional
export const humanizeTime = (maxOffset: number, clip: Clip): Clip => {
  return makeClip({
    notes: clip.notes.map(note => offsetTime(Math.random() * maxOffset, note)),
    duration: clip.duration,
  });
};

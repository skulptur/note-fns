import { snapToGrip } from './utils/snapToGrip';
import { setTime } from './setTime';
import { Clip } from './makeClip';
import { curry } from 'lodash';

/**
 * Quantizes all the notes in the clip.
 */
export const quantize = curry(
  (gridSize: number, clip: Clip): Clip => {
    return clip.map(note => setTime(snapToGrip(gridSize, note.time), note));
  }
);

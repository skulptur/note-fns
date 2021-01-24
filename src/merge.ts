import { curry } from 'ramda';
import { Clip, makeClip } from './makeClip';

/**
 * Merges two clips together.
 */
export const merge = curry((clipA: Clip, clipB: Clip) => {
  return makeClip({
    notes: clipA.notes.concat(clipB.notes),
    duration: Math.max(clipB.duration, clipA.duration),
  });
});

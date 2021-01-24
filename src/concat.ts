import { Clip, makeClip } from './makeClip';
import { offsetTime } from './offsetTime';
import { curry } from 'ramda';

/**
 * Curried binary function that takes two clips and returns a new clip with both contents in sequence.
 * The resulting clip's duration is the sum of both inputs durations.
 */
export const concat = curry(
  (clipA: Clip, clipB: Clip): Clip => {
    return makeClip({
      notes: [
        ...clipA.notes,
        ...clipB.notes.map(note => offsetTime(clipA.duration, note)),
      ],
      duration: clipA.duration + clipB.duration,
    });
  }
);

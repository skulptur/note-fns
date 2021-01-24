import { curry, times } from 'lodash';
import { mix } from 'unit-fns';
import { Clip } from './makeClip';
import { offsetPitch } from './offsetPitch';

type SimpleDelayOptions = Partial<{
  interval: number; // TODO: or array of number and use it cyclic
  count: number;
  pitchOffset: number; // TODO: or array of number and use it cyclic
  velocityOffset: number; // TODO: or array of number
}>;

/**
 * Applies a note delay effect to the clip.
 */
export const simpleDelay = curry(
  (options: SimpleDelayOptions, clip: Clip): Clip => {
    // TODO: use velocity
    const {
      interval = 0,
      count = 0,
      pitchOffset = 0,
      // velocityOffset = 0,
    } = options;

    return clip.flatMap(note => {
      return [
        note,
        ...times(count, i => {
          const progress = i / (count - 1);
          return {
            ...note,
            name: offsetPitch(i, note).name,
            time: note.time + interval * (i + pitchOffset),
            velocity: mix(note.velocity || 1, 0, progress),
          };
        }),
      ];
    });
  }
);

import { curry } from 'lodash';
import { concat } from './concat';
import { Clip } from './makeClip';

/**
 * Repeats the clip the specified amount of times.
 */
export const loopClip = curry(
  (count: number, clip: Clip): Clip => {
    return Array(count)
      .fill(clip)
      .reduce(concat);
  }
);

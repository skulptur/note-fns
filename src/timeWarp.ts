import { curry } from 'lodash';
import { Clip } from './makeClip';

/**
 * Warps the clips time progress using a provided function.
 */
export const timeWarp = curry(
  (warp: (progress: number) => number, clip: Clip): Clip => {
    const totalTime = clip.duration;

    return clip.map(note => {
      return {
        ...note,
        time: warp(note.time / totalTime) * totalTime,
        duration: warp((note.time + note.duration) / totalTime) * totalTime,
      };
    });
  }
);

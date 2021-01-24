import { curry } from 'lodash';
import { Clip, makeClip } from './makeClip';

/**
 * Scales the start and duration of each note by a factor.
 */
export const timeScale = curry(
  (factor: number, clip: Clip): Clip => {
    return makeClip({
      notes: clip.notes.map(note => {
        return {
          ...note,
          time: note.time * factor,
          duration: note.duration * factor,
        };
      }),
      duration: clip.duration * factor,
    });
  }
);

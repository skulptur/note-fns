import { setTime } from '../setTime';
import { Clip } from './makeClip';

// TODO: might need some tweaking to act exactly like Ableton does

/**
 * Returns a new clip with notes reversed.
 */
export const reverse = (clip: Clip): Clip => {
  const totalTime = clip.duration;

  return clip.map(notes => {
    return notes.map(note => {
      return setTime(totalTime - note.time, note);
    });
  });
};

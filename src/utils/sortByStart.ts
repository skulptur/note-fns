import { Clip, makeClip } from '../makeClip';

// doesn't change anything, just sorts the clip notes
export const sortByStart = (clip: Clip): Clip => {
  return makeClip({
    ...clip,
    notes: clip.notes.concat().sort((a, b) => a.time - b.time),
  });
};

import { limitPolyphony } from './limitPolyphony';
import { Clip } from './makeClip';
import { Note } from './makeNote';

/**
 * Makes a clip monophonic (only one note plays at a time).
 */
export const monophonic = (
  reducer: (noteA: Note, noteB: Note) => Note,
  clip: Clip
): Clip => {
  return limitPolyphony(playingNotes => {
    return [playingNotes.reduce(reducer)];
  }, clip);
};

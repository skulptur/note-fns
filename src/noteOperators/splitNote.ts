import { curry } from 'ramda';
import { isPlayingAt } from '../predicates/isPlayingAt';
import { Note } from './makeNote';
import { trimEnd } from '../trimEnd';
import { trimStart } from '../trimStart';

/**
 * Takes a note and splits it into 2 notes as long as note is playing at given time.
 * Otherwise returns the same note in an array.
 */
export const splitNote = curry((time: number, note: Note) => {
  if (isPlayingAt(time, note)) {
    return [trimEnd(time, note), trimStart(time, note)] as const;
  }
  return [note] as const;
});

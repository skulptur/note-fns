import { Note } from './makeNote';

// TODO: should work with anything with startTime and duration
/**
 * Notes use duration which is relative. This function returns time + duration which is the off time;
 */
export const getEndTime = (note: Note) => {
  return note.time + note.duration;
};

import { Note } from './makeNote';

/**
 * Runs a function that takes the input note and returns a array of notes, recursively applying to all returned notes
 */
export const recursiveGenerate = (
  multiplier: (depth: number, index: number, note: Note) => Array<Note> | Note,
  iterations: number,
  note: Note
): Array<Note> => {
  return Array.from<Array<Note>>({ length: iterations })
    .reduce(
      (acc, _unused, depth) => {
        const lastIteration = acc[Math.max(depth - 1, 0)];
        const thisIteration = lastIteration.flatMap((note, index) =>
          multiplier(depth, index, note)
        );

        const stuff = [lastIteration, thisIteration];
        // maybe only this iteration should be kept and the user is responsible for accumulating. That way they can choose to filter out stuff
        return stuff;
      },
      [[note]] as Array<Array<Note>>
    )
    .flat();
};

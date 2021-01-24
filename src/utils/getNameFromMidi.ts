// utility, not public API of this lib
const CHROMATIC = [
  'C',
  'Db',
  'D',
  'Eb',
  'E',
  'F',
  'F#',
  'G',
  'Ab',
  'A',
  'Bb',
  'B',
];
export const getNameFromMidi = (midi: number) => {
  const name = CHROMATIC[midi % 12];
  const oct = Math.floor(midi / 12) - 1;

  return name + oct;
};

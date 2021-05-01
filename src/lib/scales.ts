import { Interval } from './types/types';

export const algerianScale: ReadonlyArray<Interval> = [2, 1, 2, 1, 1, 1, 3, 1];
export const alteredScale: ReadonlyArray<Interval> = [1, 2, 1, 2, 2, 2, 2];
export const arabicScale: ReadonlyArray<Interval> = [1, 3, 1, 2, 1, 3, 1];
export const augmentedScale: ReadonlyArray<Interval> = [3, 1, 3, 1, 3, 1];
export const balineseScale: ReadonlyArray<Interval> = [1, 2, 4, 1, 4];
export const bluesScale: ReadonlyArray<Interval> = [3, 2, 1, 1, 3, 2];
export const byzantineScale: ReadonlyArray<Interval> = [1, 3, 1, 2, 1, 3, 1];
export const chineseScale: ReadonlyArray<Interval> = [4, 2, 1, 4, 1];
export const chromaticScale: ReadonlyArray<Interval> = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
];
export const doubleHarmonicScale: ReadonlyArray<Interval> = [
  1,
  3,
  1,
  2,
  1,
  3,
  1,
];
export const enigmaticScale: ReadonlyArray<Interval> = [1, 3, 2, 2, 2, 1, 1];
export const gypsyMajorScale: ReadonlyArray<Interval> = [1, 3, 1, 2, 1, 3, 1];
export const harmonicMinorScale: ReadonlyArray<Interval> = [
  2,
  1,
  2,
  2,
  1,
  3,
  1,
];
export const hirajoshiScale: ReadonlyArray<Interval> = [1, 4, 1, 4, 2];
export const inSenScale: ReadonlyArray<Interval> = [1, 4, 2, 3, 2];
export const japaneseScale: ReadonlyArray<Interval> = [1, 4, 2, 3, 2];
export const majorPentatonicScale: ReadonlyArray<Interval> = [2, 2, 3, 2, 3];
export const majorScale: ReadonlyArray<Interval> = [2, 2, 1, 2, 2, 2, 1];
export const melodicMinorScale: ReadonlyArray<Interval> = [2, 1, 2, 2, 2, 2, 1];
export const minorPentatonicScale: ReadonlyArray<Interval> = [3, 2, 2, 3, 2];
export const mongolianScale: ReadonlyArray<Interval> = [2, 2, 3, 2, 3];
export const naturalMinorScale: ReadonlyArray<Interval> = [2, 1, 2, 2, 1, 2, 2];
export const pelogScale: ReadonlyArray<Interval> = [1, 2, 4, 1, 4];
export const prometheusScale: ReadonlyArray<Interval> = [2, 2, 2, 3, 1, 2];
export const wholeToneScale: ReadonlyArray<Interval> = [2, 2, 2, 2, 2, 2];
export const yoScale: ReadonlyArray<Interval> = [2, 3, 2, 2, 3];

// every built-in scale as obj
export const Scale = {
  algerian: algerianScale,
  altered: alteredScale,
  arabic: arabicScale,
  augmented: augmentedScale,
  balinese: balineseScale,
  blues: bluesScale,
  byzantine: byzantineScale,
  chinese: chineseScale,
  chromatic: chromaticScale,
  doubleHarmonic: doubleHarmonicScale,
  enigmatic: enigmaticScale,
  gypsyMajor: gypsyMajorScale,
  harmonicMinor: harmonicMinorScale,
  hirajoshi: hirajoshiScale,
  inSen: inSenScale,
  japanese: japaneseScale,
  majorPentatonic: majorPentatonicScale,
  major: majorScale,
  melodicMinor: melodicMinorScale,
  minorPentatonic: minorPentatonicScale,
  mongolian: mongolianScale,
  naturalMinor: naturalMinorScale,
  pelog: pelogScale,
  prometheus: prometheusScale,
  wholeTone: wholeToneScale,
  yo: yoScale,
};

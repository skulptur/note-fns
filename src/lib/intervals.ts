// short:
export const root = 0 as const;
export const R = root;
export const semitone = 1 as const;
export const S = semitone;
export const tone = 2 as const;
export const T = tone;
export const tritone = 6 as const;
export const TT = tritone;
export const octave = 12 as const;
export const O = octave;

// minor / major:
export const perfectUnison = 0 as const;
export const P1 = perfectUnison;
export const minorSecond = 1 as const;
export const m2 = minorSecond;
export const majorSecond = 2 as const;
export const M2 = majorSecond;
export const minorThird = 3 as const;
export const m3 = minorThird;
export const majorThird = 4 as const;
export const M3 = majorThird;
export const perfectFourth = 5 as const;
export const P4 = perfectFourth;
export const perfectFifth = 7 as const;
export const P5 = perfectFifth;
export const minorSixth = 8 as const;
export const m6 = minorSixth;
export const majorSixth = 9 as const;
export const M6 = majorSixth;
export const minorSeventh = 10 as const;
export const m7 = minorSeventh;
export const majorSeventh = 11 as const;
export const M7 = majorSeventh;
export const perfectOctave = 12 as const;
export const P8 = perfectOctave;

// augmented / diminished:
export const diminishedSecond = 0 as const;
export const d2 = diminishedSecond;
export const augmentedUnison = 1 as const;
export const A1 = augmentedUnison;
export const diminishedThird = 2 as const;
export const d3 = diminishedThird;
export const augmentedSecond = 3 as const;
export const A2 = augmentedSecond;
export const diminishedFourth = 4 as const;
export const d4 = diminishedFourth;
export const augmentedThird = 5 as const;
export const A3 = augmentedThird;
export const diminishedFifth = 6 as const;
export const d5 = diminishedFifth;
export const augmentedFourth = 6 as const;
export const A4 = augmentedFourth;
export const diminishedSixth = 7 as const;
export const d6 = diminishedSixth;
export const augmentedFifth = 8 as const;
export const A5 = augmentedFifth;
export const diminishedSeventh = 9 as const;
export const d7 = diminishedSeventh;
export const augmentedSixth = 10 as const;
export const A6 = augmentedSixth;
export const diminishedEighth = 11 as const;
export const d8 = diminishedEighth;
export const diminishedOctave = 11 as const;
export const augmentedSeventh = 12 as const;
export const A7 = augmentedSeventh;

export const Interval = {
  root,
  R,
  semitone,
  S,
  tone,
  T,
  tritone,
  TT,
  octave,
  O,
  perfectUnison,
  P1,
  minorSecond,
  m2,
  majorSecond,
  M2,
  minorThird,
  m3,
  majorThird,
  M3,
  perfectFourth,
  P4,
  perfectFifth,
  P5,
  minorSixth,
  m6,
  majorSixth,
  M6,
  minorSeventh,
  m7,
  majorSeventh,
  M7,
  perfectOctave,
  P8,
  diminishedSecond,
  d2,
  augmentedUnison,
  A1,
  diminishedThird,
  d3,
  augmentedSecond,
  A2,
  diminishedFourth,
  d4,
  augmentedThird,
  A3,
  diminishedFifth,
  d5,
  augmentedFourth,
  A4,
  diminishedSixth,
  d6,
  augmentedFifth,
  A5,
  diminishedSeventh,
  d7,
  augmentedSixth,
  A6,
  diminishedEighth,
  d8,
  diminishedOctave,
  augmentedSeventh,
  A7,
};

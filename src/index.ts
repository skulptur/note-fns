export { getMiddleCFrequency } from './lib/getMiddleCFrequency';
export { mapData } from './lib/container/mapData';
export { mapRange } from './lib/container/mapRange';
export { mapValue } from './lib/container/mapValue';
export { noteNameOffsets } from './lib/noteNameOffsets';
export { toMidi } from './lib/toMidi';
export {
  noteVariations,
  accidentalToLetter,
  accidentalToSymbol,
  areEqual,
  areIntervals,
  areNotes,
  createChord,
  createMelody,
  createScale,
  flatToSharp,
  getAccidental,
  getChromaticCPosition,
  getDominant,
  getIntervals,
  getLeadingTone,
  getMediant,
  getNote,
  getNoteOnDegree,
  getOctave,
  getRoot,
  getSubdominant,
  getSubmediant,
  getSupertonic,
  getTonic,
  hasAccidental,
  hasAccidentalLetter,
  hasAccidentalSymbol,
  hasIntervalAmount,
  hasOctave,
  haveSameOctave,
  isAnhemitonic,
  isAscending,
  isCohemitonic,
  isDescending,
  isDiatonic,
  isFifth,
  isFlat,
  isHemitonic,
  isHeptatonic,
  isHexatonic,
  isMode,
  isNatural,
  isNote,
  isOctatonic,
  isOctave,
  isPentatonic,
  isScale,
  isSemitone,
  isSharp,
  isTone,
  isTriad,
  normalize,
  noteToFrequency,
  noteToMidi,
  noteToNoteDescription,
  noteDescriptionToNote,
  sharpToFlat,
  transferAccidental,
  transferStyle,
  transpose,
} from './lib/musicFns';

export {
  Scale,
  algerianScale,
  alteredScale,
  arabicScale,
  augmentedScale,
  balineseScale,
  bluesScale,
  byzantineScale,
  chineseScale,
  chromaticScale,
  doubleHarmonicScale,
  enigmaticScale,
  gypsyMajorScale,
  harmonicMinorScale,
  hirajoshiScale,
  inSenScale,
  japaneseScale,
  majorPentatonicScale,
  majorScale,
  melodicMinorScale,
  minorPentatonicScale,
  mongolianScale,
  naturalMinorScale,
  pelogScale,
  prometheusScale,
  wholeToneScale,
  yoScale,
} from './lib/scales';

export {
  Interval,
  rootInterval,
  R,
  semitoneInterval,
  S,
  toneInterval,
  T,
  tritoneInterval,
  TT,
  octaveInterval,
  O,
  perfectUnisonInterval,
  P1,
  minorSecondInterval,
  m2,
  majorSecondInterval,
  M2,
  minorThirdInterval,
  m3,
  majorThirdInterval,
  M3,
  perfectFourthInterval,
  P4,
  perfectFifthInterval,
  P5,
  minorSixthInterval,
  m6,
  majorSixthInterval,
  M6,
  minorSeventhInterval,
  m7,
  majorSeventhInterval,
  M7,
  perfectOctaveInterval,
  P8,
  diminishedSecondInterval,
  d2,
  augmentedUnisonInterval,
  A1,
  diminishedThirdInterval,
  d3,
  augmentedSecondInterval,
  A2,
  diminishedFourthInterval,
  d4,
  augmentedThirdInterval,
  A3,
  diminishedFifthInterval,
  d5,
  augmentedFourthInterval,
  A4,
  diminishedSixthInterval,
  d6,
  augmentedFifthInterval,
  A5,
  diminishedSeventhInterval,
  d7,
  augmentedSixthInterval,
  A6,
  diminishedEighthInterval,
  d8,
  diminishedOctaveInterval,
  augmentedSeventhInterval,
  A7,
} from './lib/intervals';

export {
  Mode,
  ionianMode,
  dorianMode,
  phrygianMode,
  lydianMode,
  mixolydianMode,
  aeolianMode,
  locrianMode,
} from './lib/modes';

export {
  Chord,
  augmentedChord,
  diminishedChord,
  majorSeventhChord,
  majorChord,
  minorMajorSeventhChord,
  minorSeventhChord,
  minorChord,
  seventhChord,
} from './lib/chords';

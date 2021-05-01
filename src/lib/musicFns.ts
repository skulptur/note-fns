// @ts-ignore
import {
  Chord as internalChord,
  Interval as internalInterval,
  Mode as internalMode,
  NOTES as internalNOTES,
  Scale as internalScale,
  accidentalToLetter as internalAccidentalToLetter,
  accidentalToSymbol as internalAccidentalToSymbol,
  areEqual as internalAreEqual,
  areIntervals as internalAreIntervals,
  areNotes as internalAreNotes,
  createChord as internalCreateChord,
  createMelody as internalCreateMelody,
  createScale as internalCreateScale,
  flatToSharp as internalFlatToSharp,
  getAccidental as internalGetAccidental,
  getChromaticCPosition as internalGetChromaticCPosition,
  getDominant as internalGetDominant,
  getIntervals as internalGetIntervals,
  getLeadingTone as internalGetLeadingTone,
  getMediant as internalGetMediant,
  getNote as internalGetNote,
  getNoteOnDegree as internalGetNoteOnDegree,
  getOctave as internalGetOctave,
  getRoot as internalGetRoot,
  getSubdominant as internalGetSubdominant,
  getSubmediant as internalGetSubmediant,
  getSupertonic as internalGetSupertonic,
  getTonic as internalGetTonic,
  hasAccidental as internalHasAccidental,
  hasAccidentalLetter as internalHasAccidentalLetter,
  hasAccidentalSymbol as internalHasAccidentalSymbol,
  hasIntervalAmount as internalHasIntervalAmount,
  hasOctave as internalHasOctave,
  haveSameOctave as internalHaveSameOctave,
  isAnhemitonic as internalIsAnhemitonic,
  isAscending as internalIsAscending,
  isCohemitonic as internalIsCohemitonic,
  isDescending as internalIsDescending,
  isDiatonic as internalIsDiatonic,
  isFifth as internalIsFifth,
  isFlat as internalIsFlat,
  isHemitonic as internalIsHemitonic,
  isHeptatonic as internalIsHeptatonic,
  isHexatonic as internalIsHexatonic,
  isMode as internalIsMode,
  isNatural as internalIsNatural,
  isNote as internalIsNote,
  isOctatonic as internalIsOctatonic,
  isOctave as internalIsOctave,
  isPentatonic as internalIsPentatonic,
  isScale as internalIsScale,
  isSemitone as internalIsSemitone,
  isSharp as internalIsSharp,
  isTone as internalIsTone,
  isTriad as internalIsTriad,
  normalize as internalNormalize,
  noteToFrequency as internalNoteToFrequency,
  noteToMidi as internalNoteToMidi,
  noteToObject as internalNoteToObject,
  objectToNote as internalObjectToNote,
  sharpToFlat as internalSharpToFlat,
  transferAccidental as internalTransferAccidental,
  transferStyle as internalTransferStyle,
  transpose as internalTranspose,
  // @ts-ignore
} from 'music-fns';
import {
  Accidental,
  AccidentalType,
  Direction,
  Intervals,
  NoteIndex,
  Scale,
  ScientificNote,
  ScientificNotes,
} from './types/types';
export const chord = internalChord;
export const interval = internalInterval;
export const mode = internalMode;
export const notes = internalNOTES;
export const scale = internalScale;
export const accidentalToLetter = internalAccidentalToLetter as (
  note: ScientificNote
) => ScientificNote;
export const accidentalToSymbol = internalAccidentalToSymbol as (
  note: ScientificNote
) => ScientificNote;
export const areEqual = internalAreEqual as (note: ScientificNotes) => boolean;
export const areIntervals = internalAreIntervals as (
  intervals: Intervals
) => boolean;
export const areNotes = internalAreNotes as (notes: ScientificNotes) => boolean;
export const createChord = internalCreateChord as (
  root: ScientificNote,
  chord: Intervals
) => ScientificNotes;
export const createMelody = internalCreateMelody as (
  notes: ScientificNotes,
  pattern: number[]
) => ScientificNotes;
export type CreateScaleOptions = {
  includeRootEnd: boolean;
};
export const createScale = internalCreateScale as (
  root: ScientificNote,
  scale: Intervals,
  options?: CreateScaleOptions
) => ScientificNotes;
export const flatToSharp = internalFlatToSharp as (
  note: ScientificNote
) => ScientificNote;
export const getAccidental = internalGetAccidental as (
  note: ScientificNote
) => Accidental | AccidentalType;
export const getChromaticCPosition = internalGetChromaticCPosition as (
  note: ScientificNote
) => NoteIndex;
export type GetDominantOptions = {
  direction: Direction;
};
export const getDominant = internalGetDominant as (
  diatonicScale: Scale,
  options: GetDominantOptions
) => ScientificNote;
export const getIntervals = internalGetIntervals;
export const getLeadingTone = internalGetLeadingTone;
export const getMediant = internalGetMediant;
export const getNote = internalGetNote;
export const getNoteOnDegree = internalGetNoteOnDegree;
export const getOctave = internalGetOctave;
export const getRoot = internalGetRoot;
export const getSubdominant = internalGetSubdominant;
export const getSubmediant = internalGetSubmediant;
export const getSupertonic = internalGetSupertonic;
export const getTonic = internalGetTonic;
export const hasAccidental = internalHasAccidental;
export const hasAccidentalLetter = internalHasAccidentalLetter;
export const hasAccidentalSymbol = internalHasAccidentalSymbol;
export const hasIntervalAmount = internalHasIntervalAmount;
export const hasOctave = internalHasOctave;
export const haveSameOctave = internalHaveSameOctave;
export const isAnhemitonic = internalIsAnhemitonic;
export const isAscending = internalIsAscending;
export const isCohemitonic = internalIsCohemitonic;
export const isDescending = internalIsDescending;
export const isDiatonic = internalIsDiatonic;
export const isFifth = internalIsFifth;
export const isFlat = internalIsFlat;
export const isHemitonic = internalIsHemitonic;
export const isHeptatonic = internalIsHeptatonic;
export const isHexatonic = internalIsHexatonic;
export const isMode = internalIsMode;
export const isNatural = internalIsNatural;
export const isNote = internalIsNote;
export const isOctatonic = internalIsOctatonic;
export const isOctave = internalIsOctave;
export const isPentatonic = internalIsPentatonic;
export const isScale = internalIsScale;
export const isSemitone = internalIsSemitone;
export const isSharp = internalIsSharp;
export const isTone = internalIsTone;
export const isTriad = internalIsTriad;
export const normalize = internalNormalize;
export const noteToFrequency = internalNoteToFrequency;
export const noteToMidi = internalNoteToMidi;
export const noteToObject = internalNoteToObject;
export const objectToNote = internalObjectToNote;
export const sharpToFlat = internalSharpToFlat;
export const transferAccidental = internalTransferAccidental;
export const transferStyle = internalTransferStyle;
export const transpose = internalTranspose;

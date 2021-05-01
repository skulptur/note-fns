// @ts-ignore
import {
  Chord as internalChord,
  Interval as internalInterval,
  Mode as internalMode,
  NOTES as internalNOTES,
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
  Chord,
  Direction,
  Interval,
  Intervals,
  NoteIndex,
  NoteDescription,
  Octave,
  OptionalDirection,
  Root,
  Scale,
  ScientificNote,
  ScientificNotes,
} from './types/types';
import { Hertz } from './types/Hertz';
import { Midi } from './types/Midi';

export const chord = internalChord;

export const interval = internalInterval;

export const mode = internalMode;

export const notes = internalNOTES;

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

export const getDominant = internalGetDominant as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote;

export type GetIntervalsOptioms = {
  fromRoot?: boolean;
  direction?: Direction;
};
export const getIntervals = internalGetIntervals as (
  note: ScientificNote,
  note2: ScientificNote,
  options: GetIntervalsOptioms
) => Array<number>;

export const getLeadingTone = internalGetLeadingTone as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote;

export const getMediant = internalGetMediant as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote;

export const getNote = internalGetNote as (note: ScientificNote) => string; // also note but not sure the type;

export const getNoteOnDegree = internalGetNoteOnDegree as (
  scale: Scale,
  degree: number,
  options: OptionalDirection
) => ScientificNote;

export const getOctave = internalGetOctave as (note: ScientificNote) => Octave;

export const getRoot = internalGetRoot as (note: ScientificNote) => Root;

export const getSubdominant = internalGetSubdominant as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote;

export const getSubmediant = internalGetSubmediant as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote;

export const getSupertonic = internalGetSupertonic as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote;

export const getTonic = internalGetTonic as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote;

export const hasAccidental = (internalHasAccidental as (
  note: ScientificNote
) => boolean) as (note: ScientificNote) => boolean;

export const hasAccidentalLetter = internalHasAccidentalLetter as (
  note: ScientificNote
) => boolean;

export const hasAccidentalSymbol = internalHasAccidentalSymbol as (
  note: ScientificNote
) => boolean;

export const hasIntervalAmount = internalHasIntervalAmount as (
  scale: Scale,
  intervalAmount: number,
  options: OptionalDirection
) => boolean;

export const hasOctave = internalHasOctave as (note: ScientificNote) => boolean;

export const haveSameOctave = internalHaveSameOctave as (
  notes: ScientificNotes
) => boolean;

export const isAnhemitonic = internalIsAnhemitonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

export const isAscending = internalIsAscending as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

export const isCohemitonic = internalIsCohemitonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

export const isDescending = internalIsDescending as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

export const isDiatonic = internalIsDiatonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

export const isFifth = internalIsFifth as (interval: Interval) => boolean;

export const isFlat = internalIsFlat as (note: ScientificNote) => boolean;

export const isHemitonic = internalIsHemitonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

export const isHeptatonic = internalIsHeptatonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

export const isHexatonic = internalIsHexatonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

export const isMode = internalIsMode as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

export const isNatural = internalIsNatural as (note: ScientificNote) => boolean;

export const isNote = internalIsNote as (note: ScientificNote) => boolean;

export const isOctatonic = internalIsOctatonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

export const isOctave = internalIsOctave as (interval: Interval) => boolean;

export const isPentatonic = internalIsPentatonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

export const isScale = internalIsScale as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

export const isSemitone = internalIsSemitone as (interval: Interval) => boolean;

export const isSharp = internalIsSharp as (note: ScientificNote) => boolean;

export const isTone = internalIsTone as (interval: Interval) => boolean;

export const isTriad = internalIsTriad as (chord: Chord) => boolean;

export const normalize = internalNormalize as (
  scale: Scale,
  options: OptionalDirection
) => Scale;

export type NoteToFrequencyProps = { standard: Hertz };
export const noteToFrequency = internalNoteToFrequency as (
  note: ScientificNote,
  options: NoteToFrequencyProps
) => Hertz;

export type NoteToMidiProps = { standard: Hertz };
export const noteToMidi = internalNoteToMidi as (
  note: ScientificNote,
  options: NoteToMidiProps
) => Midi;

export const noteToObject = internalNoteToObject as (
  scientificNote: ScientificNote
) => NoteDescription;

export const objectToNote = internalObjectToNote as (
  noteObject: NoteDescription
) => ScientificNote;

export const sharpToFlat = internalSharpToFlat as (
  note: ScientificNote
) => ScientificNote;

export const transferAccidental = internalTransferAccidental as (
  note: ScientificNote,
  referenceNote: ScientificNote
) => ScientificNote;

export const transferStyle = internalTransferStyle as (
  note: ScientificNote,
  referenceNote: ScientificNote
) => ScientificNote;

export const transpose = internalTranspose as (
  note: ScientificNote,
  interval: Interval,
  reference?: ScientificNote
) => ScientificNote;

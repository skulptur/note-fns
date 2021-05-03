import {
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

export const noteVariations = internalNOTES;

/**
 * Converts a note which has an accidental as a symbol (♭, ♯) to a note with the accidental as a letter (b, #).
 * */
export const accidentalToLetter = internalAccidentalToLetter as (
  note: ScientificNote
) => ScientificNote;

/**
 * Converts a note which has an accidental as a letter (b, #) to a note with the accidental as a symbol (♭, ♯).
 * */
export const accidentalToSymbol = internalAccidentalToSymbol as (
  note: ScientificNote
) => ScientificNote;

/**
 * Returns true if the provided notes are the same notes.
 * */
export const areEqual = internalAreEqual as (note: ScientificNotes) => boolean;

export const areIntervals = internalAreIntervals as (
  intervals: Intervals
) => boolean;

export const areNotes = internalAreNotes as (notes: ScientificNotes) => boolean;

/**
 * Creates a chord by providing a root note and intervals (use Chords).
 * */
export const createChord = internalCreateChord as (
  root: ScientificNote,
  chord: Intervals
) => ScientificNotes;

/**
 * Creates a melody using a provided array of notes and a pattern.
 * */
export const createMelody = internalCreateMelody as (
  notes: ScientificNotes,
  pattern: number[]
) => ScientificNotes;

export type CreateScaleOptions = {
  includeRootEnd: boolean;
};

/**
 * Creates a scale (or mode) by providing a root note and an intervals (use the Scale or Mode constant).
 * You can provide includeRootEnd to also include the root note transposed an octave up.
 * */
export const createScale = internalCreateScale as (
  root: ScientificNote,
  scale: Intervals,
  options?: CreateScaleOptions
) => ScientificNotes;

/**
 * Converts a flat to its sharp equivalent, this function preserves the accidental style (letter or symbol).
 * If no flat is found the function returns the unmodified input.
 * */
export const flatToSharp = internalFlatToSharp as (
  note: ScientificNote
) => ScientificNote;

/**
 * Returns the accidental (or undefined) from a note.
 * */
export const getAccidental = internalGetAccidental as (
  note: ScientificNote
) => Accidental | AccidentalType;

/**
 * Returns the (0-indexed) position of the specific root within a chromatic C scale (equals the NOTES constant).
 * */
export const getChromaticCPosition = internalGetChromaticCPosition as (
  note: ScientificNote
) => NoteIndex;

/**
 * Returns the note on scale degree 5 in a diatonic scale.
 * */
export const getDominant = internalGetDominant as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote;

export type GetIntervalsOptioms = {
  fromRoot?: boolean;
  direction?: Direction;
};

/**
 * Returns one or more intervals between the provided notes. You can pass fromRoot to calculate the interval from the first note (= root).
 * */
export const getIntervals = internalGetIntervals as (
  note: ScientificNote,
  note2: ScientificNote,
  options: GetIntervalsOptioms
) => Array<number>;

/**
 * Returns the note on scale degree 7 in a diatonic scale.
 * */
export const getLeadingTone = internalGetLeadingTone as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote;

/**
 * Returns the note on scale degree 3 in a diatonic scale.
 * */
export const getMediant = internalGetMediant as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote;

/**
 * Returns the full note (note + accidental) from a note.
 */
export const getNote = internalGetNote as (note: ScientificNote) => string; // also note but not sure the type;

/**
 * Returns the note on the provided scale degree.
 * */
export const getNoteOnDegree = internalGetNoteOnDegree as (
  scale: Scale,
  degree: number,
  options: OptionalDirection
) => ScientificNote;

/**
 * Returns the octave information (or undefined) from a note.
 * */
export const getOctave = internalGetOctave as (note: ScientificNote) => Octave;

/**
 * Returns the root (only note, no accidental) from a note.
 * */
export const getRoot = internalGetRoot as (note: ScientificNote) => Root;

/**
 * Returns the note on scale degree 4 in a diatonic scale.
 * */
export const getSubdominant = internalGetSubdominant as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote;

/**
 * Returns the note on scale degree 6 in a diatonic scale.
 * */
export const getSubmediant = internalGetSubmediant as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote;

/**
 * Returns the note on scale degree 2 in a diatonic scale.
 * */
export const getSupertonic = internalGetSupertonic as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote;

/**
 * Returns the note on scale degree 1 in a diatonic scale.
 * */
export const getTonic = internalGetTonic as (
  diatonicScale: Scale,
  options: OptionalDirection
) => ScientificNote;

/**
 * Returns true if the note has an accidental as a symbol (♭, ♯).
 * */
export const hasAccidental = (internalHasAccidental as (
  note: ScientificNote
) => boolean) as (note: ScientificNote) => boolean;

/**
 * Returns true if the note has an accidental as a letter (b, #).
 * */
export const hasAccidentalLetter = internalHasAccidentalLetter as (
  note: ScientificNote
) => boolean;

/**
 * Returns true if the note has an accidental as a symbol (♭, ♯).
 * */
export const hasAccidentalSymbol = internalHasAccidentalSymbol as (
  note: ScientificNote
) => boolean;

/**
 * Returns true if a scale has the provided interval amount.
 * */
export const hasIntervalAmount = internalHasIntervalAmount as (
  scale: Scale,
  intervalAmount: number,
  options: OptionalDirection
) => boolean;

/**
 * Returns true if the note has octave information.
 * */
export const hasOctave = internalHasOctave as (note: ScientificNote) => boolean;

/**
 * Returns true if all notes share the same octave information.
 * */
export const haveSameOctave = internalHaveSameOctave as (
  notes: ScientificNotes
) => boolean;

/**
 * Returns true if the scale is anhemitonic (does not contain semitones).
 * */
export const isAnhemitonic = internalIsAnhemitonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

/**
 * Returns true if the scale is ascending.
 * */
export const isAscending = internalIsAscending as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

/**
 * Returns true if the scale is cohemitonic (contains 2 or more semitones that appear consecutively in scale order).
 * */
export const isCohemitonic = internalIsCohemitonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

/**
 * Returns true if the scale is descending.
 * */
export const isDescending = internalIsDescending as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

/**
 * Returns true if the scale is diatonic (5 tones & 2 semitones, where the semitones are separated at least 2 steps from each other).
 * */
export const isDiatonic = internalIsDiatonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

/**
 * Returns true if the interval is a fifth (diminished, perfect or augmented) (6, 7, 8).
 * */
export const isFifth = internalIsFifth as (interval: Interval) => boolean;

/**
 * Returns true if the note is flat (b, ♭).
 * */
export const isFlat = internalIsFlat as (note: ScientificNote) => boolean;

/**
 * Returns true if the scale is hemitonic (contains 1 or more semitones).
 * */
export const isHemitonic = internalIsHemitonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

/**
 * Returns true if the scale is heptatonic (7 notes per octave).
 * */
export const isHeptatonic = internalIsHeptatonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

/**
 * Returns true if the scale is hexatonic (6 notes per octave).
 * */
export const isHexatonic = internalIsHexatonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

/**
 * Returns true when the provided array of notes is a mode (Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian or Locrian).
 * */
export const isMode = internalIsMode as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

/**
 * Returns true if the note is natural (no accidental).
 * */
export const isNatural = internalIsNatural as (note: ScientificNote) => boolean;

/**
 * Returns true if the provided value is a valid note in scientific pitch notation.
 * */
export const isNote = internalIsNote as (note: ScientificNote) => boolean;

/**
 * Returns true if the scale is octatonic (8 notes per octave).
 * */
export const isOctatonic = internalIsOctatonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

/**
 * Returns true if the interval is an octave (12).
 * */
export const isOctave = internalIsOctave as (interval: Interval) => boolean;

/**
 * Returns true if the scale is pentatonic (5 notes per octave).
 * */
export const isPentatonic = internalIsPentatonic as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

/**
 * Returns true when the array of notes is a scale.
 * */
export const isScale = internalIsScale as (
  scale: Scale,
  options: OptionalDirection
) => boolean;

/**
 * Returns true if the interval is a semitone (1).
 * */
export const isSemitone = internalIsSemitone as (interval: Interval) => boolean;

/**
 * Returns true if the note is sharp (#, ♯).
 * */
export const isSharp = internalIsSharp as (note: ScientificNote) => boolean;

/**
 * Returns true if the interval is a tone (2).
 * */
export const isTone = internalIsTone as (interval: Interval) => boolean;

/**
 * Returns true if the chord is a triad (a set of three notes that can be stacked in thirds).
 * */
export const isTriad = internalIsTriad as (chord: Chord) => boolean;

/**
 * Normalize a scale by making sure it's ascending & has a root end.
 * */
export const normalize = internalNormalize as (
  scale: Scale,
  options: OptionalDirection
) => Scale;

export type NoteToFrequencyProps = { standard: Hertz };
/**
 * Converts a note to a frequency (in Hz). You can use a different base frequency for A4 via standard.
 * */
export const noteToFrequency = internalNoteToFrequency as (
  note: ScientificNote,
  options: NoteToFrequencyProps
) => Hertz;

export type NoteToMidiProps = { standard: Hertz };
/**
 * Converts a note to its MIDI number. C4 = 60 in our implementation. You can provide a different middle C via standard.
 * */
export const noteToMidi = internalNoteToMidi as (
  note: ScientificNote,
  options: NoteToMidiProps
) => Midi;

/**
 * The object can contain the following keys:
 * root: a root note (C, D, E, F, G, A, B)
 * [accidental]: SHARP, FLAT
 * [accidentalType]: SYMBOL, LETTER
 * [octave]: number
 * */
export const noteToNoteDescription = internalNoteToObject as (
  scientificNote: ScientificNote
) => NoteDescription;

/**
 * Converts an object describing the note to a note.

 * The object can contain following keys:

 * root: a root note (C, D, E, F, G, A, B)
 * [accidental]: SHARP / FLAT
 * [accidentalType]: SYMBOL / LETTER
 * [octave]: number
 * */
export const noteDescriptionToNote = internalObjectToNote as (
  noteObject: NoteDescription
) => ScientificNote;

/**
 * Converts a sharp to its flat equivalent, this function preserves the accidental style (letter or symbol).
 * If no sharp is found the function returns the unmodified input.
 * */
export const sharpToFlat = internalSharpToFlat as (
  note: ScientificNote
) => ScientificNote;

/**
 * Transfer the accidental type (flat or sharp) from a provided reference note
 * In this example, we've converted F♯3 to Gb3 because the reference note is Bb4 (a flat instead of sharp).
 * */
export const transferAccidental = internalTransferAccidental as (
  note: ScientificNote,
  referenceNote: ScientificNote
) => ScientificNote;

/**
 * Combination of transferAccidental and transferAccidentalStyle.
 * In this example, we've converted F#3 to G♭3 because the reference note is B♭4 (a flat symbol instead of a sharp letter).
 * */
export const transferStyle = internalTransferStyle as (
  note: ScientificNote,
  referenceNote: ScientificNote
) => ScientificNote;

/**
 * Transpose a note by a specific interval (use the Interval constant). An interval can also be negative.
 * */
export const transpose = internalTranspose as (
  note: ScientificNote,
  interval: Interval,
  reference?: ScientificNote
) => ScientificNote;

/* eslint-disable */
import { Note } from './Note';

export type ExtractValue<T> = T extends Note<infer Value, any, any>
  ? Value
  : never;
export type ExtractData<T> = T extends Note<any, infer Data, any>
  ? Data
  : never;
export type ExtractRangeType<T> = T extends Note<any, any, infer RangeType>
  ? RangeType
  : never;

export type OptionalDirection = {
    direction?: Direction;
};

export type Root = 'A' | 'B' |'C' |'D' |'E' |'F' |'G'

export type NoteObject = {
    root: Note,
    accidental?: Accidental,
    accidentalType?: AccidentalType,
    octave?: Octave
};

export type Direction = 1 | -1;

export type NoteName = string;
export type Accidental = 'SHARP' | 'FLAT' | '';
export type AccidentalType = 'LETTER' | 'SYMBOL' | '';
export type Octave = number;

export type ScientificNote = string;
export type Interval = number;
export type Intervals = Array<Interval>;

export type Scale = Array<Note>;
export type Chord = Array<Note>;
export type ScientificNotes = Array<ScientificNote>;

export type NoteIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
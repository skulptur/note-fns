/* eslint-disable */
import {NoteName} from "./NoteName";

export type OptionalDirection = {
    direction?: Direction;
};

export type Root = 'A' | 'B' |'C' |'D' |'E' |'F' |'G'

export type NoteDescription = {
    root: NoteName,
    accidental?: Accidental,
    accidentalType?: AccidentalType,
    octave?: Octave
};

export type Direction = 1 | -1;
export type Accidental = 'SHARP' | 'FLAT' | '';
export type AccidentalType = 'LETTER' | 'SYMBOL' | '';
export type Octave = number;

export type ScientificNote = string;
export type Interval = number;
export type Intervals = ReadonlyArray<Interval>;

export type Scale = ReadonlyArray<NoteName>;
export type Chord = ReadonlyArray<NoteName>;
export type ScientificNotes = ReadonlyArray<ScientificNote>;

export type NoteIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
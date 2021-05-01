import { Opaque } from 'type-fest';

export type Midi = Opaque<number, 'Midi'>;
// TODO: import from range-fns when it has it
export type Range<T extends number> = [T, T];

export type CommonData = {
  velocity: number;
};

export type Note<
  Value = Midi,
  Data = CommonData,
  RangeType extends number = number
> = {
  range: Range<RangeType>;
  value: Value;
  data: Data;
};

export type ExtractValue<T> = T extends Note<infer Value, any, any>
  ? Value
  : never;
export type ExtractData<T> = T extends Note<any, infer Data, any>
  ? Data
  : never;
export type ExtractRangeType<T> = T extends Note<any, any, infer RangeType>
  ? RangeType
  : never;

export type NoteName =
  | 'B#'
  | 'C'
  | 'C#'
  | 'Db'
  | 'D'
  | 'D#'
  | 'Eb'
  | 'E'
  | 'Fb'
  | 'E#'
  | 'F'
  | 'F#'
  | 'Gb'
  | 'G'
  | 'G#'
  | 'Ab'
  | 'A'
  | 'A#'
  | 'Bb'
  | 'B'
  | 'Cb';

export type Hertz = Opaque<number, 'Hertz'>;

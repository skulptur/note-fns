import { CommonData } from './CommonData';
import { Midi } from './Midi';
import { Range } from './Range';

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

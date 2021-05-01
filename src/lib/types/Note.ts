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

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

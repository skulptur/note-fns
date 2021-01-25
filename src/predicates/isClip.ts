import { Clip } from '../clipOperators/makeClip';

export const isClip = (val: unknown): val is Clip => {
  return (val as Clip)._tag === 'Clip';
};

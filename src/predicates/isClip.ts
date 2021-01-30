import { Clip } from '../clip/makeClip';

export const isClip = (val: unknown): val is Clip => {
  return (val as Clip)._tag === 'Clip';
};

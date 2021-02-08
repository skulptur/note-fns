import { Show } from 'fp-ts/lib/Show';
import { Monoid } from 'fp-ts/lib/Monoid';
import { getStructMonoid } from 'fp-ts/lib/Monoid';
import { Eq } from 'fp-ts/lib/Eq';

export interface TimedEvent {
  start: number;
  end: number;
}

export const create = (start: number, end: number) => {
  return {
    start,
    end,
  };
};

export const empty = create(0, 0);

const equals = (a: TimedEvent, b: TimedEvent) => {
  return a.start === b.start && a.end === b.end;
};

// instances
export const eq: Eq<TimedEvent> = {
  equals,
};

const monoidMin: Monoid<number> = {
  concat: Math.min,
  empty: 0,
};

const monoidMax: Monoid<number> = {
  concat: Math.max,
  empty: 0,
};

export const add: Monoid<TimedEvent> = {
  empty,
  concat: (a, b) => {
    return create(a.start + b.start, a.end + b.end);
  },
};

// the resulting TimedEvent will have:
// start: the min of the two starts
// end: the max of the two ends
export const merge: Monoid<TimedEvent> = getStructMonoid({
  start: monoidMin,
  end: monoidMax,
});

// // the resulting TimedEvent will have:
// // start: the min of the two starts
// // end: the max of the two starts
// export const cutLeft: Monoid<TimedEvent> = {
//   empty,
//   concat: (x, y) => {
//     return create(Math.min(x.start, y.start), Math.max(x.start, y.start));
//   },
// };

export const show: Show<TimedEvent> = {
  show: a => {
    return JSON.stringify(a);
  },
};

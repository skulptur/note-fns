import { Ord } from 'fp-ts/lib/Ord';
import { Show } from 'fp-ts/lib/Show';
import { Monoid } from 'fp-ts/lib/Monoid';
import { getStructMonoid } from 'fp-ts/lib/Monoid';

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

// instances
export const ord: Ord<TimedEvent> = {
  equals: (a, b) => a.start === b.start && a.end === b.end,
  compare: (a, b) => {
    return a.start < b.start ? -1 : a.start > b.start ? 1 : 0;
  },
};

const monoidMin: Monoid<number> = {
  concat: Math.min,
  empty: 0,
};

const monoidMax: Monoid<number> = {
  concat: Math.max,
  empty: 0,
};

export const merge: Monoid<TimedEvent> = getStructMonoid({
  start: monoidMin,
  end: monoidMax,
});

export const show: Show<TimedEvent> = {
  show: a => {
    return JSON.stringify(a);
  },
};

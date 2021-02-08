import { eq, add } from './TimedEvent';
import * as laws from 'fp-ts-laws';
import * as fc from 'fast-check';

const arbitraryTimedEvent = fc.record({
  start: fc.integer(0, 5),
  end: fc.integer(6, 10),
});

describe('TimedEvent', () => {
  it('satisfies eq laws', () => {
    laws.eq(eq, arbitraryTimedEvent);
  });

  it('has an add monoid instance', () => {
    laws.monoid(add, eq, arbitraryTimedEvent);
  });

  // it('has a cutLeft that satisfies semigroup laws', () => {
  //   laws.semigroup(cutLeft, eq, arbitraryTimedEvent);
  // });
});

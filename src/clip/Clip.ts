import { TimedEvent, empty as emptyTimeEvent } from '../TimedEvent/TimedEvent';
import { Monad1 } from 'fp-ts/lib/Monad';
import { Kind } from 'fp-ts/lib/HKT';

export const URI = 'Clip';

export type URI = typeof URI;

declare module 'fp-ts/lib/HKT' {
  interface URItoKind<A> {
    Clip: Clip<A>;
  }
}

export interface Clip<A> {
  time: TimedEvent;
  value: A;
}

// needs to be a functor, maybe aplicative or even a monad
const create = <A>(timedEvent: TimedEvent, value: A): Clip<A> => {
  return {
    time: timedEvent,
    value,
  };
};

// instances
export const monadClip: Monad1<URI> = {
  URI,
  of: a => {
    return create(emptyTimeEvent, a);
  },
  map: <A, B>(fa: Clip<A>, f: (a: A) => B): Clip<B> => {
    return { ...fa, value: f(fa.value) };
  },
  ap: <A, B>(fab: Clip<(a: A) => B>, fa: Clip<A>): Clip<B> => {
    // TODO: should probably merge both times?!
    return create(emptyTimeEvent, fab.value(fa.value));
  },
  chain: <A, B>(fa: Clip<A>, f: (a: A) => Clip<B>): Clip<B> => {
    return f(fa.value);
  },
};

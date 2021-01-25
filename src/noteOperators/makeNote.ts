export type NoteOptions = Partial<
  | Note
  | (Omit<Note, 'duration'> & {
      endTime: number;
    })
>;

export type Note = {
  _tag: 'Note';
  name: string; // TODO: improve
  time: number;
  duration: number;
  velocity: number;
};

const defaults = {
  name: 'C5',
  time: 0,
  duration: 0,
  velocity: 0.75,
};

export const makeNote = (options: NoteOptions = {}): Note => {
  // the constructor accepts endTime or duration, but Note only uses duration internally
  if ('endTime' in options && options.endTime !== undefined) {
    const { endTime, ...rest } = options;
    const time = options.time ? options.time : defaults.time;
    const duration = Math.max(0, endTime - time);

    return makeNote({
      ...rest,
      duration,
    });
  }

  return {
    _tag: 'Note',
    ...defaults,
    ...options,
  };
};

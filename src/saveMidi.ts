// TODO: fix
// @ts-ignore
import { Midi } from '@tonejs/midi';
import { Clip } from './clipOperators/makeClip';
const fs = require('fs');

type SaveMidiOptions = {
  bpm: number;
  name: string;
  tracks: Array<Clip>;
};

// TODO: make it high level, so I can have some tracks like drums with only their names and the midi conversion takes care of it
export const saveMidi = ({ bpm, name, tracks }: SaveMidiOptions) => {
  // create a new midi file
  const midi = new Midi();
  midi.header.setTempo(bpm);

  tracks.forEach(track => {
    const midiTrack = midi.addTrack();
    track.notes.forEach(note => {
      // TODO: consider making all timings relative to beats and only assign them their timings here
      midiTrack.addNote(note);
    });
  });

  // write the output
  fs.writeFileSync(`${name}.mid`, new Buffer(midi.toArray()));
};

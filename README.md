## About

Use this library when you need a comprehensive but lightweight solution for working with musical notes in Typescript. It re-exports most of the [music-fns](https://github.com/madewithlove/music-fns) library and adds some more on top.

**Please refer to music-fns documentation until documentation is added here. Notable differences are documented below!**

## Get started

Install

```bash
npm install --save note-fns
# or
yarn add note-fns
```

Use

```typescript
import { getNote } from 'note-fns';

console.log(getNote('A#4')); // 'A#'
```

## Differences from music-fns

### Scales

In note-fns I opted to export each scale individually as well as an object containing all of them. Example:

```typescript
import { ScalesByName, naturalMinorScale } from 'note-fns';

console.log(ScalesByName); // logs all built-in scales with camelCase keys.
console.log(naturalMinorScale); // logs array of interval
```

### Modes

Similarly as with scales, note-fns exports the constant directly as well as an object containing all of them. Example:

```typescript
import { ModesByName, phrygianMode } from 'note-fns';

console.log(ModesByName); // logs all modes with camelCase keys.
console.log(phrygianMode); // [1, 2, 2, 2, 1, 2, 2]
```

### Intervals

Example:

```typescript
import { IntervalsByName, perfectFithInterval } from 'note-fns';

console.log(IntervalsByName); // logs all intervals with camelCase keys.
console.log(perfectFithInterval); // 7
```

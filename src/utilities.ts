export function swap(value: ReadonlyArray<number>, index: number, _with: number): typeof value {
  if (index < 0 || index >= value.length)
    throw new Error(`index ${index} is not valid for ${value.map(v => v.toString()).join(', ')}.`);
  return [...value.slice(0, index), _with, ...value.slice(index + 1)];
}

export function isInteger(value: unknown): value is number {
  return Number.isSafeInteger(value);
}

export function isPositiveInteger(value: unknown): value is number {
  return isInteger(value) && value > 0;
}

export function shift(value: ReadonlyArray<number>, shiftBy: number): typeof value {
  if (shiftBy === 0) return value;
  const a = value.slice(-shiftBy)
  const b = value.slice(0, value.length - shiftBy)
  return [...a, ...b];
}

export function changeValueAtIndex(value: ReadonlyArray<number>, index: number, changeTo: number): Readonly<typeof value> {
  const newValue = [...value];
  newValue[index] = changeTo;
  return newValue;
}

export function generateSequence(n: number): ReadonlyArray<number> {
  return [...Array(n).keys()].map(n => n + 1);
}

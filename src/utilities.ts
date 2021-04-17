export function swap(value: ReadonlyArray<number>, index: number, _with: number): typeof value {
  if (index < 0 || index >= value.length)
    throw new Error(`index ${index} is not valid for ${value.map(v => v.toString()).join(', ')}.`);
  return [...value.slice(0, index), _with, ...value.slice(index + 1)];
}

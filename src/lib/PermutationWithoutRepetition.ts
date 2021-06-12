import { shift } from '../utilities';

export function permutationWithoutRepetitionCalculator(sequence: ReadonlyArray<number>, nRotation: number, result: ReadonlyArray<number>[] = []): typeof result {
  if (nRotation === 1) {
    result.push(sequence)
  }
  for (let i = 0; i < nRotation; i++) {
    let j = shift(sequence, i);
    permutationWithoutRepetitionCalculator(j, nRotation - 1, result);
  }
  return result;
}

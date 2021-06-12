import { generateSequence, shiftPortionOfArrayByAmount } from '../utilities';
import type { InputElement } from './types';

export function permutationWithoutRepetition(
  values: ReadonlyArray<InputElement>,
  sequence: ReadonlyArray<InputElement> = generateSequence(values.length),
  nRotation: number = values.length,
  result: ReadonlyArray<InputElement>[] = []
): typeof result {
  if (nRotation === 1) {
    result.push(sequence)
  } else {
    for (let i: number = 0; i < nRotation; i++) {
      let newSequence = shiftPortionOfArrayByAmount(sequence, values.length - nRotation, values.length - 1, i);
      permutationWithoutRepetition(values, newSequence, nRotation - 1, result);
    }
  }
  return result;
}

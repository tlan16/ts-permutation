import { generateSequence, shiftPortionOfArrayByAmount } from '../utilities';
import type { InputElement } from './types';

export function permutationWithoutRepetition(
  values: ReadonlyArray<InputElement>,
  sequence: ReadonlyArray<InputElement> = generateSequence(values.length),
  totalNumberOfOrations: number = values.length,
  result: ReadonlyArray<InputElement>[] = []
): typeof result {
  if (totalNumberOfOrations === 1) {
    result.push(sequence);
  } else {

    for (let numberToRotateWith = 0; numberToRotateWith < totalNumberOfOrations; numberToRotateWith++) {
      const newSequence = shiftPortionOfArrayByAmount(
        sequence,
        values.length - totalNumberOfOrations,
        values.length - 1,
        numberToRotateWith
      );
      permutationWithoutRepetition(values, newSequence, totalNumberOfOrations - 1, result);
    }
  }
  return result;
}

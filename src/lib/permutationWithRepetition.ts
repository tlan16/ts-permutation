import { changeValueAtIndex } from '../utilities';
import type { InputElement } from './types';

export function permutationWithRepetition(
  values: ReadonlyArray<InputElement>,
  sequence: ReadonlyArray<InputElement> = Array(values.length).fill(values[0]),
  changingPosition: number = 1,
  result: ReadonlyArray<InputElement>[] = []
): Readonly<typeof result> {
  for (let changeToIndex: number = 1; changeToIndex <= sequence.length; changeToIndex++) {
    const changeTo = values[changeToIndex - 1];
    const newSequence = changeValueAtIndex(sequence, changingPosition - 1, changeTo);
    if (changingPosition === sequence.length) {
      result.push(newSequence)
    } else {
      permutationWithRepetition(values, newSequence, changingPosition + 1, result)
    }
  }
  return result;
}

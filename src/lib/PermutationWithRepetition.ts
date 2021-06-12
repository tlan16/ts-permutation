import { changeValueAtIndex } from '../utilities';

export function permutationWithRepetitionCalculator(
  sequence: ReadonlyArray<number>,
  changingPosition: number,
  result: ReadonlyArray<number>[] = []
): Readonly<typeof result>{
  for(let changeTo: number = 1; changeTo <= sequence.length; changeTo++) {
    const newSequence = changeValueAtIndex(sequence, changingPosition - 1, changeTo);
    if (changingPosition === sequence.length) {
      result.push(newSequence)
    } else {
      permutationWithRepetitionCalculator(newSequence, changingPosition + 1, result)
    }
  }
  return result;
}

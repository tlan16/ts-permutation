import PermutationWithRepetition from './PermutationWithRepetition';
import { isInteger } from '../utilities';

export function permutationWithRepetition(n: PermutationWithRepetition['n']): ReadonlyArray<number[]> {
  if (!isInteger(n) || n < 2) {
    throw new RangeError('n must be an integer greater than 1');
  }
  const permutation = new PermutationWithRepetition(n);
  permutation.calculate();
  return permutation.result;
}

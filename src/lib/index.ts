import PermutationWithRepetition from './PermutationWithRepetition';
import { isPositiveInteger } from '../utilities';
import PermutationWithoutRepetition from './PermutationWithoutRepetition';
import assert from 'assert';

export function permutationWithRepetition(n: PermutationWithRepetition['n']): ReadonlyArray<number[]> {
  assert(isPositiveInteger(n), 'n must be positive integer.');
  if (n === 1) return [[1]];

  const permutation = new PermutationWithRepetition(n);
  permutation.calculate();
  return permutation.result;
}

export function permutationWithoutRepetition(n: PermutationWithoutRepetition['n']): ReadonlyArray<ReadonlyArray<number>> {
  assert(isPositiveInteger(n), 'n must be positive integer.');
  if (n === 1) return [[1]];

  const permutation = new PermutationWithoutRepetition(n);
  permutation.calculate();
  return permutation.result;
}

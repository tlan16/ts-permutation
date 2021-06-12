import PermutationWithRepetition from './PermutationWithRepetition';
import { generateSequence, isPositiveInteger, shift } from '../utilities';
import { permutationWithoutRepetitionCalculator } from './PermutationWithoutRepetition';
import assert from 'assert';

export function permutationWithRepetition(n: PermutationWithRepetition['n']): ReadonlyArray<number[]> {
  if (n === 1) return [[1]];

  const permutation = new PermutationWithRepetition(n);
  permutation.calculate();
  return permutation.result;
}

export function permutationWithoutRepetition(n: number): ReadonlyArray<ReadonlyArray<number>> {
  assert(isPositiveInteger(n), 'n must be positive integer.');
  const initialSequence = generateSequence(n);
  return permutationWithoutRepetitionCalculator(initialSequence, n);
}

import { permutationWithRepetitionCalculator } from './PermutationWithRepetition';
import { generateSequence, isPositiveInteger } from '../utilities';
import { permutationWithoutRepetitionCalculator } from './PermutationWithoutRepetition';
import assert from 'assert';

export function permutationWithRepetition(n: number): ReadonlyArray<ReadonlyArray<number>> {
  assert(isPositiveInteger(n), 'n must be positive integer.');
  const initialSequence = Array(n).fill(1);
  return permutationWithRepetitionCalculator(initialSequence, 1);
}

export function permutationWithoutRepetition(n: number): ReadonlyArray<ReadonlyArray<number>> {
  assert(isPositiveInteger(n), 'n must be positive integer.');
  const initialSequence = generateSequence(n);
  return permutationWithoutRepetitionCalculator(initialSequence, n);
}

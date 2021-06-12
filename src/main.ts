import { permutationWithRepetition } from './lib/permutationWithRepetition';
import { permutationWithoutRepetition } from './lib/permutationWithoutRepetition';
import { generateSequence } from './utilities';

const result = permutationWithoutRepetition(generateSequence(4));
// const result = permutationWithRepetition(generateSequence(3));
console.log({
  result,
  length: result.length,
});

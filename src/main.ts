import Permutation from './permutation';

const permutation = new Permutation(3);
permutation.calculate();
console.log({
  result: permutation.results,
  length: permutation.results.length,
  iterationCount: permutation.iterationCount,
});

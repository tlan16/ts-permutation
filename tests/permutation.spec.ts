import { Permutation as LibPermutation } from "ts-combinatorics"
// import Permutation from '../src/permutation';

describe('permutation', () => {
  const cases: number[] = Array.from(Array(10).keys());
  test.each(cases)('when n is %d', n => {
    // const permutation = new Permutation(n);
    // const result = permutation.calculate();
    console.log(Array.from(new LibPermutation(Array.from(Array(n).keys()).map(n => (n + 1).toString()))));
    // expect(result.map(r => r.toString().split(''))).toStrictEqual( [...new LibPermutation('abcd')])
  })
})

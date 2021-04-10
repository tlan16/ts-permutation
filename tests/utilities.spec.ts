import { swap } from '../src/utilities';

describe('utilities', () => {
  describe('swap', () => {
    const happyCases: ReadonlyArray<[[string, number, string], string]> = [
      [['abc', 0, 'z'], 'zbc'],
      [['abc', 1, 'z'], 'azc'],
      [['abc', 2, 'z'], 'abz'],
      [['abc', 0, 'zz'], 'zzbc'],
      [['abc', 1, 'zz'], 'azzc'],
      [['abc', 2, 'zz'], 'abzz'],
    ];
    test.each(happyCases)('args: %s, result %s', (args, result) => {
      expect(swap(...args)).toStrictEqual(result);
    });
    const badCases: ReadonlyArray<[[string, number, string]]> = [
      [['abc', -1, 'z']],
      [['abc', 3, 'z']],
    ];
    test.each(badCases)('args: %s, result Error', (args) => {
      expect(() => {
        swap(...args)
      }).toThrow();
    });
  })
})

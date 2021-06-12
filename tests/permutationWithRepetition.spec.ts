import { permutationWithRepetition } from '../src/lib'
import { sortResult, testCases } from './fixtures/permutationWithRepetition'

describe('permutation', () => {
    test.each(testCases)('when n is %d', (args, expectedResult) => {
        const result = permutationWithRepetition(...args)
        expect(sortResult(result)).toStrictEqual(expectedResult)
    })

    const badCases: any[] = [
        1,
        0,
        -1,
        'a',
        '1a',
        'a1',
        Infinity,
        -Infinity,
        Number.MAX_SAFE_INTEGER + 1,
        Number.MIN_SAFE_INTEGER - 1,
    ].map((n) => n.toString())
    test.each(badCases)('result Error when n id %s', (arg) => {
        expect(() => {
            permutationWithRepetition(arg)
        }).toThrow(new RangeError('n must be an integer greater than 1'))
    })
})

import { swap } from '../src/utilities'

describe('utilities', () => {
    describe('swap', () => {
        const happyCases: ReadonlyArray<[[number[], number, number], number[]]> = [
            [
                [[1, 2, 3], 0, 9],
                [9, 2, 3],
            ],
            [
                [[1, 2, 3], 1, 9],
                [1, 9, 3],
            ],
            [
                [[1, 2, 3], 2, 9],
                [1, 2, 9],
            ],
            [
                [[1, 2, 3], 0, 99],
                [99, 2, 3],
            ],
            [
                [[1, 2, 3], 1, 99],
                [1, 99, 3],
            ],
            [
                [[1, 2, 3], 2, 99],
                [1, 2, 99],
            ],
        ]
        test.each(happyCases)('args: %s, result %s', (args, result) => {
            expect(swap(...args)).toStrictEqual(result)
        })
        const badCases: ReadonlyArray<[[number[], number, number], number[]]> = [
            [
                [[1, 2, 3], -1, 9],
                [9, 2, 3],
            ],
            [
                [[1, 2, 3], 3, 9],
                [9, 2, 3],
            ],
        ]
        test.each(badCases)('args: %s, result Error', (args) => {
            expect(() => {
                swap(...args)
            }).toThrow()
        })
    })
})

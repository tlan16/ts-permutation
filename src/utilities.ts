import type { InputElement } from './lib/types'
import assert from 'assert'

export function swap(value: ReadonlyArray<number>, index: number, _with: number): typeof value {
    if (index < 0 || index >= value.length)
        throw new Error(`index ${index} is not valid for ${value.map((v) => v.toString()).join(', ')}.`)
    return [...value.slice(0, index), _with, ...value.slice(index + 1)]
}

export function shiftRight(value: ReadonlyArray<InputElement>, shiftBy: number): typeof value {
    if (shiftBy === 0) return value
    const a = value.slice(-shiftBy)
    const b = value.slice(0, value.length - shiftBy)
    return [...a, ...b]
}

export function shiftPortionOfArrayByAmount(
    array: ReadonlyArray<InputElement>,
    fromIndex: number,
    toIndex: typeof fromIndex = array.length - 1,
    amount: number = 1,
): typeof array {
    assert(fromIndex < toIndex, `fromIndex must be less or equal than toIndex`)
    const start = array.slice(0, fromIndex)
    const end = array.slice(toIndex + 1)
    const middle = shiftRight(array.slice(fromIndex, toIndex + 1), amount)
    return [...start, ...middle, ...end]
}

export function changeValueAtIndex(
    value: ReadonlyArray<InputElement>,
    index: number,
    changeTo: InputElement,
): Readonly<typeof value> {
    const newValue = [...value]
    newValue[index] = changeTo
    return newValue
}

export function generateSequence(n: number): ReadonlyArray<number> {
    return [...Array(n).keys()].map((n) => n + 1)
}

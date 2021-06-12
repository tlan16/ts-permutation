type Arguments = [number]
type Result = ReadonlyArray<number[]>
type TestCase = [Arguments, Result]

export const testCases: ReadonlyArray<TestCase> = [
    [[2], sortResult(resultStringToArray('AA AB BA BB'))],
    [
        [3],
        sortResult(
            resultStringToArray(
                'AAA AAB ABA BAA AAC ACA CAA ABB BAB BBA ABC ACB BAC BCA CAB CBA ACC CAC CCA BBB BBC BCB CBB BCC CBC CCB CCC',
            ),
        ),
    ],
    [
        [4],
        sortResult(
            resultStringToArray(
                'AAAA AAAB AABA ABAA BAAA AAAC AACA ACAA CAAA AAAD AADA ADAA DAAA AABB ABAB ABBA BAAB BABA BBAA AABC AACB ABAC ABCA ACAB ACBA BAAC BACA BCAA CAAB CABA CBAA AABD AADB ABAD ABDA ADAB ADBA BAAD BADA BDAA DAAB DABA DBAA AACC ACAC ACCA CAAC CACA CCAA AACD AADC ACAD ACDA ADAC ADCA CAAD CADA CDAA DAAC DACA DCAA AADD ADAD ADDA DAAD DADA DDAA ABBB BABB BBAB BBBA ABBC ABCB ACBB BABC BACB BBAC BBCA BCAB BCBA CABB CBAB CBBA ABBD ABDB ADBB BABD BADB BBAD BBDA BDAB BDBA DABB DBAB DBBA ABCC ACBC ACCB BACC BCAC BCCA CABC CACB CBAC CBCA CCAB CCBA ABCD ABDC ACBD ACDB ADBC ADCB BACD BADC BCAD BCDA BDAC BDCA CABD CADB CBAD CBDA CDAB CDBA DABC DACB DBAC DBCA DCAB DCBA ABDD ADBD ADDB BADD BDAD BDDA DABD DADB DBAD DBDA DDAB DDBA ACCC CACC CCAC CCCA ACCD ACDC ADCC CACD CADC CCAD CCDA CDAC CDCA DACC DCAC DCCA ACDD ADCD ADDC CADD CDAD CDDA DACD DADC DCAD DCDA DDAC DDCA ADDD DADD DDAD DDDA BBBB BBBC BBCB BCBB CBBB BBBD BBDB BDBB DBBB BBCC BCBC BCCB CBBC CBCB CCBB BBCD BBDC BCBD BCDB BDBC BDCB CBBD CBDB CDBB DBBC DBCB DCBB BBDD BDBD BDDB DBBD DBDB DDBB BCCC CBCC CCBC CCCB BCCD BCDC BDCC CBCD CBDC CCBD CCDB CDBC CDCB DBCC DCBC DCCB BCDD BDCD BDDC CBDD CDBD CDDB DBCD DBDC DCBD DCDB DDBC DDCB BDDD DBDD DDBD DDDB CCCC CCCD CCDC CDCC DCCC CCDD CDCD CDDC DCCD DCDC DDCC CDDD DCDD DDCD DDDC DDDD',
            ),
        ),
    ],
]

export function sortResult(result: Readonly<Result>): typeof result {
    return [...result].sort()
}

function resultStringToArray(str: string): Readonly<Result> {
    return str.split(' ').map((s) => s.split('').map(charToInt))
}

function charToInt(char: string): number {
    const map = computeCharToIntMap()
    return map.get(char)
}

function computeCharToIntMap(): ReadonlyMap<string, number> {
    const result = new Map<string, number>()
    const base = 'A'.charCodeAt(0)
    for (let i: number = base; i <= 'Z'.charCodeAt(0); i++) {
        result.set(String.fromCharCode(i), i - base + 1)
    }
    return result
}

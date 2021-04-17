import { swap as libSwap } from './utilities';

export default class Permutation {
  private readonly n: number;
  private locked: number = 0;
  private results: number[];
  private swapCalled: number = 0;
  private iterationCount: number = 0;

  constructor(n: Permutation['n']) {
    this.n = n;
    this.results = [parseInt(Array.from(Array(n).keys()).map(n => (n + 1).toString()).join(''))];
    console.log(`Permutation size is ${n}. Initialised result to be ${this.results[0]}.`);
  }

  private swap(str: string, index: number, withStr: string): string {
    this.swapCalled++;
    return libSwap(str, index, withStr);
  }

  private perLocked() {
    const newResults: number[] = [];
    const index = this.locked;
    for (const result of this.results) {
      for (let i: number = 1; i <= this.n; i++) {
        this.iterationCount++;
        if (result.toString()[index] === i.toString()) {
          newResults.push(result);
          console.log(`${libSwap(result.toString(), index, `_${result.toString()[index]}_`)}: ${result}`);
          continue;
        }
        const newResult = parseInt(this.swap(result.toString(), index, i.toString()));
        console.log(`${libSwap(result.toString(), index, `(${result.toString()[index]})`)}: ${newResult}`);
        newResults.push(newResult);
      }
    }
    this.results = newResults;
  }

  public calculate(): Permutation['results'] {
    while (this.locked !== this.n) {
      this.perLocked();
      console.log({result: this.results});
      this.locked++;
    }
    console.debug('Swap called times: ', this.swapCalled);
    console.debug('Iteration count: ', this.iterationCount);
    return this.results;
  }
}

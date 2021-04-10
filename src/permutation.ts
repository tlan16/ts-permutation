import { swap } from './utilities';


export default class Permutation {
  private readonly n: number;
  private locked: number = 0;
  private results: number[];

  constructor(n: Permutation['n']) {
    this.n = n;
    this.results = [parseInt(Array.from(Array(n).keys()).map(n => (n + 1).toString()).join(''))];
    console.log(`Permutation size is ${n}. Initialised result to be ${this.results[0]}.`);
  }

  private perLocked() {
    const newResults: number[] = [];
    const index = this.locked;
    for (const result of this.results) {
      for (let i: number = 1; i <= this.n; i++) {
        const newResult = parseInt(swap(result.toString(), index, i.toString()));
        console.log(`${swap(result.toString(), index, `(${result.toString()[index]})`)}: ${newResult}`);
        newResults.push(newResult);
      }
    }
    this.results = newResults;
  }

  public calculate(): Permutation['results'] {
    while (this.locked !== this.n) {
      this.perLocked();
      this.locked++;
    }
    return this.results;
  }
}

export default class Permutation {
  private readonly n: number;
  public results: number[][] = [];
  public iterationCount: number = 0;

  constructor(n: Permutation['n']) {
    this.n = n;
    console.log(`Permutation size is ${n}.`);
  }

  public calculate(lock: number[] = [1]): void {
    this.iterationCount++;
    if (lock.length === this.n) {
      this.results.push(lock);
      for (let i: number = this.n - 1; i >= 0; i--) {
        if (lock[i] === this.n) {
          continue
        }
        lock = [...lock.slice(0, i), lock[i] + 1]
        return this.calculate(lock)
      }
      return;
    }
    lock = [...lock, 1];
    return this.calculate(lock);
  }
}

export default class PermutationWithRepetition {
  private readonly n: number;
  public readonly result: number[][] = [];

  constructor(n: PermutationWithRepetition['n']) {
    this.n = n;
  }

  public calculate(lock: number[] = [1]): void {
    if (lock.length === this.n) {
      this.result.push(lock);
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

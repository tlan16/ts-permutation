export function permutation(
  n: Readonly<number>,
  lock: number[] = [1],
  result: number[][] = []
): Readonly<typeof result>{
  if (lock.length === n) {
    result.push(lock);
    for (let i: number = n - 1; i >= 0; i--) {
      if (lock[i] === n) {
        continue
      }
      lock = [...lock.slice(0, i), lock[i] + 1]
      return permutation(n, lock, result)
    }
    return result;
  }
  lock = [...lock, 1];
  return permutation(n, lock, result);
}

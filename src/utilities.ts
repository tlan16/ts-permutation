export function swap(str: string, index: number, withStr: string): string {
  if (index < 0 || index >= str.length) throw new Error(`index ${index} is not valid for string ${str}.`);
  return str.slice(0, index) + withStr + str.substr(index + 1)
}

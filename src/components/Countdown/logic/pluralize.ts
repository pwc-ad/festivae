export function pluralize(word: string, shouldPluralize: boolean) {
  return shouldPluralize ? word + "s" : word;
}

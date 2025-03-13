// This is an example of a TypeScript function that takes in a string and returns a transformed version of that string
function transformString(str: string): string {
  // The `replace` method is used to replace all instances of "foo" with "bar" in the input string
  return str.replace(/foo/g, 'bar');
}

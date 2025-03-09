function getRandomTsCode(): string {
  const num = Math.random() * 10;
  return `const x = ${num}; console.log(x);`;
}

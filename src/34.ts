// Example TypeScript code to be used with a TypeScript compiler like tsc

class MyClass {
  private value: any;

  constructor(value: any) {
    this.value = value;
  }

  public get() {
    return this.value;
  }
}

const myObject = new MyClass("Hello, World!");
console.log(myObject.get()); // "Hello, World!"

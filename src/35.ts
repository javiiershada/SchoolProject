function calculateGCD(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage:
console.log(calculateGCD(48, 18)); // Output: 6

function power(a: number, b: number): number {
    if (b === 0) return 1
    if (b < 0) return 1 / power(a, -b);
    return a * power(a, b - 1)
}

console.log(power(2, 3)) //8
console.log(power(5, 0)) //1

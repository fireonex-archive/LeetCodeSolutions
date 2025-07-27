function factorial(n: number) {
    if (n === 0) return 1;

    function func(x: number, acc: number) {
        if (x > n) return acc
        return func(x + 1, acc * x)
    }

    func(1, 1)
}

factorial(5)

//function factorial(n: number): number {
//     if (n === 0) return 1;
//     return n * factorial(n - 1);
// }
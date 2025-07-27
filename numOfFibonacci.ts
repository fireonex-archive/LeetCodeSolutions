function fib(n: number): number {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2)
}

fib(6) //8
fib(4) //3

//fib(2) = fib(1) + fib(0) = 1 + 0 = 1
//fib(3) = fib(2) + fib(1) = 1 + 1 = 2

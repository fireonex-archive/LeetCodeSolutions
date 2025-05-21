// https://leetcode.com/problems/climbing-stairs/

function climbStairs2(n: number): number {
    if (n === 1 || n === 0) return n
    let a = 1, //f(0) = 1
        b = 1; //f(1) = 1
    for (let i = 2; i <= n; i++) {
        const temp = a + b; //f(i) = f(i-1) + f(i-2)
        a = b; // a = f(i-1)
        b = temp; //b = f(i)
    }
    return b;
}
climbStairs2(6) //13


function climbStairs(n: number): number {
    if (n <= 2) return n
    return climbStairs(n - 1) + climbStairs(n - 2) //f(n) = f(n - 1) + f(n - 2)
}
climbStairs(6) //13

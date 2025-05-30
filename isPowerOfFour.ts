//https://leetcode.com/problems/power-of-four/
function isPowerOfFour(n: number): boolean {
    if (n <= 0) return false
    const num = Math.log(n) / Math.log(4)
    return (Math.round(num) === num)
}
isPowerOfFour(16) //true
isPowerOfFour(5) //false
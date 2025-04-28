// https://leetcode.com/problems/sqrtx/
function mySqrt(x: number): number {
    let i = 0;
    while (i * i <= x) {
        i++;
    }
    return i - 1;
}

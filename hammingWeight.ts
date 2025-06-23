// https://leetcode.com/problems/number-of-1-bits
function hammingWeight(n: number): number {
    const binaryStr = n.toString(2)
    let result = 0
    for (let el of binaryStr) {
        if (el !== "0") result++
    }
    return result
}
hammingWeight(11) //3
// The input binary string 1011 has a total of three set bits.
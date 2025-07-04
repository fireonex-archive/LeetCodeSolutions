// https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers
function getNoZeroIntegers(n: number): number[] {
    let firstNum = n - 1
    let secondNum = 1
    if (firstNum.toString().includes("0")) {
        while (
            (firstNum.toString().includes("0")) || (secondNum.toString().includes("0"))) {
            firstNum--
            secondNum++
        }
    }
    return [firstNum, secondNum]
}

getNoZeroIntegers(11) //[2, 9]
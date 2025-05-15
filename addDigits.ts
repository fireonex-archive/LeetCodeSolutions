// https://leetcode.com/problems/add-digits

function addDigits(num: number): number {
    let digits = num.toString().split('').map(Number)
    let result;
    do {
        result = digits.reduce((acc, current) => acc + current,);
        digits = result.toString().split('').map(Number)
    } while (result >= 10)
    return result;
}

addDigits(38) //2

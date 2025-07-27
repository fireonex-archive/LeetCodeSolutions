// function sumDigits(n: number): number {
//     let strSum = n.toString()
//     let result = 0
//     for (let el of strSum) {
//         result += Number(el)
//     }
//     return result
// }

function sumDigits(n: number): number {
    if (n.toString().length === 1) return n;
    const lastNum = n % 10
    const remainingNumber = Math.floor(n / 10)
    return lastNum + sumDigits(remainingNumber)
}

console.log(sumDigits(1234)) //10 -> (1 + 2 + 3 + 4)

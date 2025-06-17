function sortEvenOdd(nums: number[]) {
    const oddIndexNums = nums.filter((num, index) => index % 2 !== 0).sort((a, b) => b - a);
    const evenIndexNums = nums.filter((num, index) => index % 2 === 0).sort((a, b) => a - b)
    const resultArr = []
    while (oddIndexNums.length > 0 || evenIndexNums.length > 0) {
        if (evenIndexNums.length > 0) {
            resultArr.push(evenIndexNums.shift())
        }
        if (oddIndexNums.length > 0) {
            resultArr.push(oddIndexNums.shift())
        }
    }
    return resultArr
}

sortEvenOdd([16, 31, 38, 24, 15, 38, 45, 13, 23, 38, 26, 44, 21, 25, 33, 29, 11, 42])
//[11,44,15,42,16,38,21,38,23,31,26,29,33,25,38,24,45,13]


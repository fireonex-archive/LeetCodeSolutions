//https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations

function countDistinctIntegers(nums: number[]): number {
    const invertedNums = []
    for (const num of nums) {
        let invertedNum = num.toString().split('').reverse().join('')
        invertedNums.push(Number(invertedNum))
    }
    const concatenatedArr = nums.concat(invertedNums)
    const uniqueNums = new Set(concatenatedArr)
    return uniqueNums.size
}

countDistinctIntegers([1,13,10,12,31]); //[1,13,10,12,31,1,31,1,21,13] - 6
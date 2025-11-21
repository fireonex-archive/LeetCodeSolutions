// https://leetcode.com/problems/maximum-difference-between-increasing-elements

function maximumDifference(nums: number[]): number {
    const differences = []
    for (let i = 0; i < nums.length - 1; i++) {
        let firstEl = nums[i]
        for (let j = 1; j < nums.length; j++) {
            let nextEl = nums[j]
            if (firstEl < nextEl && i < j) {
                differences.push(nextEl - firstEl)
            }
        }
    }
    if (differences.length === 0) return -1
    return Math.max(...differences)
}

console.log(maximumDifference([7, 1, 5, 4])) //4
console.log(maximumDifference([9,4,3,2])) //-1
console.log(maximumDifference([1,5,2,10])) //9

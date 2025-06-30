// https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/
function maxSubsequence(nums: number[], k: number): number[] {
    const result = []
    const numsIndexes = []

    const numsCopy = [...nums]
    while (numsIndexes.length < k) {
        let maxValue = Math.max(...numsCopy)
        let index = numsCopy.indexOf(maxValue)
        numsIndexes.push(index)
        numsCopy[index] = -Infinity
    }
    numsIndexes.sort((a, b) => a - b)

    for (let idx of numsIndexes) {
        const el = nums[idx]
        result.push(el)
    }
    return result
}

maxSubsequence([-1, -2, 3, 4], 3) //[-1,3,4]
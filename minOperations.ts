// https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i
function minOperations(nums: number[], k: number): number {
    let count = 0;
    for (let el of nums) {
        if (el < k) {
            count++
        }
    }
    return count
}

minOperations([2,11,10,1,3], 10) //3
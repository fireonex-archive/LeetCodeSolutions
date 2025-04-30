// https://leetcode.com/problems/single-number/
function singleNumber(nums: number[]): number {
    if (nums.length === 1) return nums[0]
    for (let i = 0; i < nums.length; i++) {
        let count = nums.filter(x => x === nums[i]).length;
        if (count === 1) return nums[i]
    }
};
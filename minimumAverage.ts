// https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements

function minimumAverage(nums: number[]): number {
    const averages = []
    const n = nums.length;
    let max,
        min;

    for (let i = n / 2; i > 0; i--) {
        nums.sort((a, b) => a - b);
        max = nums[nums.length - 1];
        min = nums[0];
        nums.shift()
        nums.pop()
        averages.push((min + max) / 2)
    }
    return Math.min(...averages)
}

minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]) //5.5

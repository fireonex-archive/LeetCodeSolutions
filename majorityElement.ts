// https://leetcode.com/problems/majority-element/
function majorityElement(nums: number[]): number {
    if (nums.length === 1) return nums[0];

    const map = new Map<number, number>();

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let maxKey: number | null = null;
    let maxValue = -Infinity;

    for (const [key, value] of map) {
        if (value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
    }

    return maxKey!;
}
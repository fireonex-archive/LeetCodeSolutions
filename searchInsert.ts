// https://leetcode.com/problems/search-insert-position/

function searchInsert1(nums: number[], target: number) {
    const indexResult = nums.findIndex((el) => el === target);
    if (indexResult === -1) {
        for (let i = 0; i < nums.length; i++) {
            if (
                nums[i] < target &&
                (i + 1 >= nums.length || nums[i + 1] > target)
            ) {
                return i + 1;
            }
        }
    } else {
        return indexResult
    }
}


function searchInsert2(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left
}


searchInsert1([1, 3, 5, 6], 2) //1
searchInsert2([1, 2, 3, 5, 6], 4) //3
// https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing
function isStrictlyIncreasing(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false;
        }
    }
    return true;
}

function canBeIncreasing(nums: number[]): boolean {
    if (isStrictlyIncreasing(nums)) return true;
    for (let i = 0; i < nums.length; i++) {
        const numCopy = [...nums]
        numCopy.splice(i, 1)
        const isIncreasing = isStrictlyIncreasing(numCopy);
        if (isIncreasing) return true;
    }
    return false;
}

canBeIncreasing([2,3,1,2]) //false
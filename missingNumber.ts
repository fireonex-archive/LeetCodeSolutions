// https://leetcode.com/problems/missing-number

function missingNumberBinary(nums: number[]): number {
    const sortedNums = nums.sort((a, b) => a - b);
    let left = 0;
    let right = sortedNums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (sortedNums[mid] !== mid) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

function missingNumberDefault(nums: number[]): number {
    const exampleArr = Array.from({ length: nums.length + 1 }, (_, i) => i);
    const sortedNums = nums.sort((a, b) => a - b);
    for (let i = 0; i < exampleArr.length; i++) {
        if (sortedNums[i] !== exampleArr[i]) {
            return exampleArr[i]
        }
    }
    return 0;
}

missingNumberBinary([1, 2, 3]) //0
missingNumberDefault([3, 0, 1]) //2

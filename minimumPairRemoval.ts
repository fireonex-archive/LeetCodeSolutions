//https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i

function isSorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) return false;
    }
    return true;
}

function minimumPairRemoval(nums: number[]): number {
    let count = 0;

    while (!isSorted(nums)) {
        let minSum = Infinity;
        let minIndex = -1;

        for (let i = 0; i < nums.length - 1; i++) {
            const sum = nums[i] + nums[i + 1];
            if (sum < minSum) {
                minSum = sum;
                minIndex = i;
            }
        }

        nums.splice(minIndex, 2, minSum);
        count++;
    }

    return count;
}


minimumPairRemoval([5, 2, 3, 1]) //2
//The pair (3,1) has the minimum sum of 4. After replacement, nums = [5,2,4].
// The pair (2,4) has the minimum sum of 6. After replacement, nums = [5,6].
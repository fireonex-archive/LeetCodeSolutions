// https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray

function findSubarrays(arr: number[]) {
    let subarrays = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            const subarray = arr.slice(i, j + 1);
            subarrays.push(subarray);
        }
    }
    return subarrays;
}

function findStrictlyMonotonic(arrays: number[][], increasing: boolean = true) {
    const result = [];
    for (const arr of arrays) {
        let isMonotonic = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (increasing) {
                if (arr[i] >= arr[i + 1]) {
                    isMonotonic = false;
                    break;
                }
            } else {
                if (arr[i] <= arr[i + 1]) {
                    isMonotonic = false;
                    break;
                }
            }
        }
        if (isMonotonic) {
            result.push(arr.length);
        }
    }

    return result;
}


function longestMonotonicSubarray(nums: number[]): number {
    const subarrays = findSubarrays(nums)

    const strictlyIncreasing = findStrictlyMonotonic(subarrays) //возрастающие
    const strictlyDecreasing = findStrictlyMonotonic(subarrays, false) //убывающие

    const lengthsOfMonotoneArrays = strictlyIncreasing.concat(strictlyDecreasing)
    return Math.max(...lengthsOfMonotoneArrays)
}

longestMonotonicSubarray([1, 4, 3, 3, 2])
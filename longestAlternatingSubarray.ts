function findSubarrays(arr: number[], threshold: number) {
    const subarrays = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            const subarray = arr.slice(i, j + 1);
            let validSubarray = true;

            if (subarray[0] % 2 !== 0) {
                validSubarray = false
                break
            }

            for (const num of subarray) {
                if (num > threshold) {
                    validSubarray = false
                    break
                }
            }

            for (let i = 0; i < subarray.length - 1; i++) {
                if (subarray[i] % 2 === subarray[i + 1] % 2) {
                    validSubarray = false
                    break
                }
            }
            if (validSubarray) {
                subarrays.push(subarray);
            }
        }
    }
    return subarrays;
}


function longestAlternatingSubarray(nums: number[], threshold: number): number {
    const subarrays = findSubarrays(nums, threshold);
    if (subarrays.length === 0) return 0
    const subarraysLengths = []
    for (let arr of subarrays) {
        subarraysLengths.push(arr.length);
    }
    return Math.max(...subarraysLengths)
}

longestAlternatingSubarray([2,3,4,5], 4) //3
longestAlternatingSubarray([1], 1) //0
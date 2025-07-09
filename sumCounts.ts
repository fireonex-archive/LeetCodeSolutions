// https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i
function countSubarrays(arr: number[]) {
    let subarraysLengths = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            const subarray = arr.slice(i, j + 1);
            const uniqueValues = new Set(subarray);
            subarraysLengths.push(uniqueValues.size);
        }
    }
    return subarraysLengths;
}

function sumCounts(nums: number[]): number {
    const values = countSubarrays(nums)
    let result = 0
    for (let el of values) {
        result += el * el
    }
    return result
}

sumCounts([1, 2, 1]) //15
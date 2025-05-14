// https://leetcode.com/problems/intersection-of-two-arrays
function intersection1(nums1: number[], nums2: number[]): number[] {
    const uniqueArray1 = [...new Set(nums1)];
    const uniqueArray2 = [...new Set(nums2)];
    return uniqueArray1.filter(num => uniqueArray2.includes(num));
}

intersection1([1, 2, 2, 1], [2, 2]) //[2]

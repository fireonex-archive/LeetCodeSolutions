// https://leetcode.com/problems/divide-array-into-equal-pairs
function divideArray(nums: number[]): boolean {
    let arrMap = new Map()
    for (const element of nums) {
        arrMap.set(element, (arrMap.get(element) || 0) + 1);
    }
    for (const [key, value] of arrMap) {
        if (value % 2 !== 0) return false
    }
    return true
}
divideArray([3,2,3,2,2,2]) //true (2, 2), (3, 3) и (2, 2)
divideArray([1,2,3,4]) //false

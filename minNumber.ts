function minNumber(nums1: number[], nums2: number[]): number {
    const allNums = [...nums1, ...nums2];
    const numsMap = new Map();
    for (const element of allNums) {
        numsMap.set(element, (numsMap.get(element) || 0) + 1);
    }
    const generalNums = []
    for (const [key, value] of numsMap) {
        if (value === 2) {
            generalNums.push(key)
        }
    }
    if (generalNums.length) return Math.min(...generalNums);

    const minNum1 = Math.min(...nums1)
    const minNum2 = Math.min(...nums2)

    if (minNum1 > minNum2) return Number(`${minNum2}${minNum1}`)
    return Number(`${minNum1}${minNum2}`)

}

minNumber([4, 1, 3], [5, 7]) //15
minNumber([3, 5, 2, 6], [3, 1, 7]) //3

// Даны два массива уникальных цифр nums1 и nums2,
// вернуть наименьшее число, содержащее хотя бы одну цифру из каждого массива
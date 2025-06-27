function duplicateNumbersXOR(nums: number[]): number {
    const numsMap = new Map();
    for (const element of nums) {
        numsMap.set(element, (numsMap.get(element) || 0) + 1);
    }
    const resultArr = []
    for (const [key, value] of numsMap) {
        if (value === 2) {
            resultArr.push(key)
        }
    }
    if (!resultArr.length) return 0
    if (resultArr.length === 1) return resultArr[0]
    let result = resultArr[0];
    for (let i = 1; i < resultArr.length; i++) {
        result ^= resultArr[i];
    }
    return result;
}

duplicateNumbersXOR([1, 2, 3, 3, 2, 1]) //0
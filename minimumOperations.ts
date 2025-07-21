function isElementsDifferent (arr: number[]): boolean {
    const arrSet = new Set(arr);
    return arr.length === arrSet.size
}

function minimumOperations(nums: number[]): number {
    let operationsCount = 0;
    while (nums.length) {
        const isDiff = isElementsDifferent(nums);
        if (isDiff) {
            return operationsCount
        } else {
            nums.splice(0, 3)
            operationsCount++
        }
    }

    return operationsCount
}

minimumOperations([4,5,6,4,4]) //2

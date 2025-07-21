function targetIndices(nums: number[], target: number): number[] {
    nums.sort((a, b) => a - b);
    const resultArr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            resultArr.push(i);
        }
    }
    return resultArr;
}

targetIndices([1, 2, 5, 2, 3], 2) //[1,2]
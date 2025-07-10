function applyOperations(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] = nums[i] * 2;
            nums[i + 1] = 0;
        }
    }
    const zerosArr = []
    const noZerosArr = []
    for (let el of nums) {
        if (el === 0) {
            zerosArr.push(el);
        } else {
            noZerosArr.push(el)
        }
    }

    return noZerosArr.concat(zerosArr)
}

applyOperations([1, 2, 2, 1, 1, 0]) //[1,4,2,0,0,0]

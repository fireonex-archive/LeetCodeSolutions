function sumOfGoodNumbers(nums: number[], k: number): number {
    let goodNumsSum = 0
    let num
    for (let i = 0; i < nums.length; i++) {
        num = nums[i];
        const isGood =
            (i - k < 0 || nums[i] > nums[i - k]) &&
            (i + k >= nums.length || nums[i] > nums[i + k]);

        if (isGood) {
            goodNumsSum += num;
        }
    }
    return goodNumsSum
}

sumOfGoodNumbers([1, 3, 2, 1, 5, 4], 2) //12
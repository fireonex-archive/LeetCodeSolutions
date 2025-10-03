function numIdenticalPairs(nums: number[]): number {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i < j && nums[i] === nums[j]) {
                count++;
            }
        }
    }

    return count;
}

numIdenticalPairs([1,2,3,1,1,3]) //4
//(0,3), (0,4), (3,4), (2,5)

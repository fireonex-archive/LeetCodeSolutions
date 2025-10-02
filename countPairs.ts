function countPairs(nums: number[], target: number): number {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i < j && (nums[i] + nums[j] < target)) {
                count++;
            }
        }
    }

    return count;
}

countPairs([-1,1,2,3,1], 2) //3
countPairs([-6,2,5,-2,-7,-1,3], -2) //10

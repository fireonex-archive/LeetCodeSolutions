function findClosestNumber(nums: number[]): number {
    let closest = nums[0];

    for (const el of nums) {
        const absNum = Math.abs(el);
        const absClosest = Math.abs(closest);

        if (
            absNum < absClosest ||
            (absNum === absClosest && el > closest)
        ) {
            closest = el;
        }
    }

    return closest;
}

findClosestNumber([-4,-2,1,4,8]) //1 [4, 2, 1, 4, 8]
// findClosestNumber([2, -1, 1]) //1 [2, 1, 1]

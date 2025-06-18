function numberGame(nums: number[]): number[] {
    let arr = []
    while (nums.length) {
        nums.sort((a, b) => a - b);
        arr.push(nums[1], nums[0]);
        nums.splice(0, 2);
    }
    return arr
}


numberGame([5, 4, 2, 3]) //[3,2,5,4]
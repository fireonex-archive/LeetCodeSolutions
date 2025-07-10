function distinctAverages(nums: number[]): number {
    let average = 0
    const averageArr = []
    while (nums.length) {
        nums = nums.sort((a, b) => a - b)
        average = (nums[0] + nums[nums.length - 1]) / 2
        averageArr.push(average)
        nums.splice(0, 1)
        nums.splice(nums.length - 1, 1)
    }
    const averageSet = new Set(averageArr)
    return averageSet.size
}

distinctAverages([4,1,4,0,3,5]) //2
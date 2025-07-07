function getSneakyNumbers(nums: number[]): number[] {
    const notRepeatedArr: number[] = []
    const repeatedArr: number[] = []
    for (let i = 0; i < nums.length; i++) {
        if (notRepeatedArr.includes(nums[i])) {
            repeatedArr.push(nums[i])
        } else {
            notRepeatedArr.push(nums[i])
        }
    }
    return repeatedArr
}

getSneakyNumbers([7,1,5,4,3,4,6,0,9,5,8,2]) //[4,5]
function getMinDistance(nums: number[], target: number, start: number): number {
    const resultArr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            resultArr.push(Math.abs(i - start))
        }
    }
    if (resultArr.length > 1) {
        return Math.min(...resultArr);
    } else return resultArr[0]
}

getMinDistance([5, 3, 6], 5, 2) //2
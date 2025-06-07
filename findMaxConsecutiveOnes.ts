function findMaxConsecutiveOnes(nums: number[]): number {
    let counter = 0
    let countMax = 0
    for (let el of nums) {
        if (el === 1) {
            counter++
        } else {
            if (counter > countMax) countMax = counter
            counter = 0
        }
    }
    if (counter > countMax) countMax = counter
    return countMax
}

findMaxConsecutiveOnes([1,1,0,1,1,1]) //3
// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
function numberOfSteps(num: number): number {
    let counter = 0;
    let numCopy = num
    while (numCopy > 0) {
        counter++
        if (numCopy % 2 === 0) {
            numCopy = numCopy / 2
        } else {
            numCopy -= 1
        }
    }
    return counter
}
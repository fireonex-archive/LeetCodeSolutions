// https://leetcode.com/problems/maximum-number-of-balls-in-a-box/

function sumOfDigits(ballNumber: number): number {
    const numberStr = ballNumber.toString();
    let sum = 0;
    for (let i = 0; i < numberStr.length; i++) {
        sum += parseInt(numberStr[i]);
    }
    return sum;
}

function incrementValue(map: Map<number, number>, key: number) {
    let currentValue = map.get(key);
    if (currentValue === undefined) {
        currentValue = 0;
    }
    map.set(key, currentValue + 1);
}

function countBalls(lowLimit: number, highLimit: number): number {
    const ballsMap = new Map<number, number>();
    for (let boxNum = 1; boxNum < highLimit; boxNum++) {
        ballsMap.set(boxNum, 0)
    }
    for (let step = lowLimit; step <= highLimit; step++) {
        const key = sumOfDigits(step)
        incrementValue(ballsMap, key)
    }
    const values = Array.from(ballsMap.values());
    return Math.max(...values)
}

countBalls(1, 10) //2

// n == highLimit - lowLimit + 1 //10 balls
// Input: lowLimit = 1, highLimit = 10
// Output: 2
// Explanation:
// Box Number:  1 2 3 4 5 6 7 8 9 10 11 ...
// Ball Count:  2 1 1 1 1 1 1 1 1 0  0  ...
// Box 1 has the most number of balls with 2 balls.

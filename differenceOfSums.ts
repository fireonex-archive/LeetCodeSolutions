function differenceOfSums(n: number, m: number): number {
    let num = 1
    const numsArr = []
    const divisible = []
    const notDivisible = []
    while (num <= n) {
        numsArr.push(num++)
    }
    for (let num of numsArr) {
        if (num % m === 0) {
            divisible.push(num)
        } else {
            notDivisible.push(num)
        }
    }
    const divisibleSum = divisible.length ? divisible.reduce((a, b) => a + b) : 0
    const notDivisibleSum = notDivisible.length ? notDivisible.reduce((a, b) => a + b) : 0
    return notDivisibleSum - divisibleSum
}

differenceOfSums(10, 3) //19
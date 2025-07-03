function countEven(num: number): number {
    let result = 0
    for (let i = 2; i <= num; i++) {
        const arrOfDigit = i.toString().split('')
        const sumOfDigit = arrOfDigit.reduce(
            (previousDigit, currentDigit) => Number(previousDigit) + Number(currentDigit), 0
        )
        if (sumOfDigit % 2 === 0) result++

    }
    return result
}

countEven(30) //14
//2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26 и 28.
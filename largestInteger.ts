function largestInteger(num: number): number {
    const even = []
    const odd = []
    let strNum = String(num)
    for (let el of strNum) {
        const numEl = Number(el)
        if (numEl % 2 === 0) {
            even.push(numEl)
        } else {
            odd.push(numEl)
        }
    }

    even.sort((a, b) => b - a)
    odd.sort((a, b) => b - a)

    let result = ""
    let currentEvenIndex = 0
    let currentOddIndex = 0

    for (let el of strNum) {
        const numEl = Number(el)
        if (numEl % 2 === 0) {
            result += even[currentEvenIndex++];
        } else {
            result += odd[currentOddIndex++];
        }
    }

    return Number(result)
}


largestInteger(1234) //3412
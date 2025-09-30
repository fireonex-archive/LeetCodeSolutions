function divideString(s: string, k: number, fill: string): string[] {
    const result: string[] = []
    let startIndex = 0
    let endIndex = k
    let numberOfElements = Math.ceil(s.length / k)
    while (numberOfElements) {
        let el = s.slice(startIndex, endIndex)
        result.push(el)
        startIndex += k
        endIndex += k
        numberOfElements--
    }
    let lastElement = result[result.length - 1]
    if (lastElement.length < k) {
        while (lastElement.length < k) {
            lastElement += fill
        }
    }

    result.splice(-1, 1, lastElement)

    return result
}

divideString("abcdefghi", 3, "x") //["abc","def","ghi"]
divideString("abcdefghij", 3, "x") //["abc","def","ghi","jxx"]
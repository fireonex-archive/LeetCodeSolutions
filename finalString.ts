function finalString(s: string): string {
    let result = []
    for (let el of s) {
        if (el === "i") {
            result.reverse()
        } else {
            result.push(el)
        }
    }
    return result.join('')
}
finalString("string") //"rtsng"

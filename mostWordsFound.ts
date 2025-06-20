function mostWordsFound(sentences: string[]): number {
    const resultArr = []
    for (let el of sentences) {
        resultArr.push(el.split(' ').length)
    }
    return Math.max(...resultArr)
}

mostWordsFound(["alice and bob love leetcode","i think so too","this is great thanks very much"]) //6
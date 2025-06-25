function isAcronym(words: string[], s: string): boolean {
    let acronym = ""
    for (let el of words) {
        acronym += el[0]
    }
    return acronym === s
}

isAcronym(["alice", "bob", "charlie"], "abc")
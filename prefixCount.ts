function prefixCount(words: string[], pref: string): number {
    let result = 0;
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let wordPrefix = word.substring(0, pref.length)
        if (wordPrefix === pref) {
            result++
        }
    }
    return result
}
prefixCount(["pay","attention","practice","attend"], "at")
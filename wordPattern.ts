// https://leetcode.com/problems/word-pattern
function wordPattern(pattern: string, s: string): boolean {
    const sArr = s.split(' ');
    if (sArr.length !== pattern.length) return false;
    const letterMatchesMap = new Map();
    const wordMatchesMap = new Map();
    const patternSet = new Set(pattern);
    for (let i = 0; i < pattern.length; i++) {
        const word = sArr[i];
        const letter = pattern[i];

        if (letterMatchesMap.has(word) && letterMatchesMap.get(word) !== letter) {
            return false;
        }

        if (wordMatchesMap.has(letter) && wordMatchesMap.get(letter) !== word) {
            return false;
        }

        letterMatchesMap.set(word, letter);
        wordMatchesMap.set(letter, word);
    }

    return letterMatchesMap.size === patternSet.size;
}

// wordPattern("abba", "dog cat cat dog") //true
// wordPattern("aaaa", "dog cat cat dog") //false
wordPattern("aba", "dog cat cat") //false

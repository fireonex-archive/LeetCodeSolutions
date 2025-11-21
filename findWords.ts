//https://leetcode.com/problems/keyboard-row/submissions

function allWordsInString(word: string, targetString: string) {
    const wordArray = Array.from(word);
    return wordArray.every(letter => targetString.includes(letter.toLowerCase()));
}

function findWords(words: string[]): string[] {

    const firstRow = "qwertyuiop"
    const secondRow = "asdfghjkl"
    const thirdRow = "zxcvbnm"

    const result = []

    for (const word of words) {
        if (allWordsInString(word, firstRow)
            || allWordsInString(word, secondRow)
            || allWordsInString(word, thirdRow)) {
            result.push(word);
        }
    }

    return result
}

findWords(["Hello", "Alaska", "Dad", "Peace"]) //["Alaska","Dad"]
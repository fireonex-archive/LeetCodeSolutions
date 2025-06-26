let englishAlphabet = "";
for (let i = 97; i <= 122; i++) {
    englishAlphabet += String.fromCharCode(i);
}

function countLetterValue(word: string): number {
    let result = ""
    for (let el of word) {
        result += englishAlphabet.indexOf(el)
    }
    return Number(result)
}

function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
    const sum = countLetterValue(firstWord) + countLetterValue(secondWord)
    return sum === countLetterValue(targetWord)
}

isSumEqual("acb", "cba", "cdb") //true
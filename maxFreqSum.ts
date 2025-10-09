function isVowelRegEx(char: string) {
    if (char.length == 1) {
        return /[aeiou]/.test(char);
    }
}

function maxFreqSum(s: string): number {
    const vowels = []
    const consonants = []
    for (let i = 0; i < s.length; i++) {
        if (isVowelRegEx(s[i])) {
            vowels.push(s[i])
        } else {
            consonants.push(s[i])
        }
    }

    const vowelsMap = new Map();
    for (let letter of vowels) {
        vowelsMap.set(letter, (vowelsMap.get(letter) || 0) + 1);
    }

    const consonantsMap = new Map();
    for (let letter of consonants) {
        consonantsMap.set(letter, (consonantsMap.get(letter) || 0) + 1);
    }

    const vowelsValues = [...vowelsMap.values()]
    const consonantsValues = [...consonantsMap.values()]

    const maxVowel = vowelsValues.length ? Math.max(...vowelsValues) : 0
    const maxConsonants = consonantsValues.length ? Math.max(...consonantsValues) : 0

    return maxVowel + maxConsonants
}

maxFreqSum("successes"); //6 = 2 + 4

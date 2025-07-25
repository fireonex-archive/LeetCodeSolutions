// https://leetcode.com/problems/number-of-valid-words-in-a-sentence
function countValidWords(sentence: string): number {
    const words = sentence.split(/\s+/).filter(el => el !== "");
    let validCount = 0;

    const validCharsRegex = /^[a-z\-!.,]+$/;
    const lowercaseRegex = /[a-z]/;
    const hyphenRegex = /-/g;
    const punctuationRegex = /[!.,]/g;

    for (const word of words) {
        if (!validCharsRegex.test(word)) continue;

        const hyphenMatches = word.match(hyphenRegex);
        if (hyphenMatches && hyphenMatches.length > 1) continue;

        if (hyphenMatches?.length === 1) {
            const hyphenIndex = word.indexOf('-');
            const prevChar = word[hyphenIndex - 1];
            const nextChar = word[hyphenIndex + 1];
            if (!(lowercaseRegex.test(prevChar) && lowercaseRegex.test(nextChar))) {
                continue;
            }
        }

        const punctuationMatches = word.match(punctuationRegex);
        if (punctuationMatches && punctuationMatches.length > 1) continue;

        if (punctuationMatches?.length === 1) {
            const lastChar = word[word.length - 1];
            if (!punctuationRegex.test(lastChar)) continue;
        }

        validCount++;
    }

    return validCount;
}

countValidWords("cat and  dog") //3
countValidWords("!this  1-s b8d!") //0

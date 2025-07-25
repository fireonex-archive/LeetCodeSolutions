// https://leetcode.com/problems/number-of-valid-words-in-a-sentence
function countValidWords(sentence: string): number {
    const words = sentence.split(/\s+/).filter(el => el !== "");
    let validCount = 0;

    const validCharsRegex = /^[a-z\-!.,]+$/;
    const hyphenRegex = /-/g;
    const punctuationRegex = /[!.,]$/;

    for (const word of words) {
        if (!validCharsRegex.test(word)) continue;

        const hyphenMatches = word.match(hyphenRegex);
        if (hyphenMatches) {
            if (hyphenMatches.length > 1) continue;
            const hyphenIndex = word.indexOf('-');
            if (hyphenIndex === 0 || hyphenIndex === word.length - 1) continue;
            if (!/[a-z]/.test(word[hyphenIndex - 1]) || !/[a-z]/.test(word[hyphenIndex + 1])) continue;
        }

        const punctuationMatches = word.match(/[!.,]/g);
        if (punctuationMatches) {
            if (punctuationMatches.length > 1) continue;
            if (!punctuationRegex.test(word)) continue;
        }

        validCount++;
    }

    return validCount;
}

countValidWords("cat and  dog") //3
countValidWords("!this  1-s b8d!") //0

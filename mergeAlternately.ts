//https://leetcode.com/problems/merge-strings-alternately/description/

function mergeAlternately(word1: string, word2: string): string {
    let result = ''
    if(word1.length > word2.length) {
        for (let i = 0; i < word1.length; i++) {
            if (i > word2.length - 1) {
                result += word1[i]
            } else {
                result += word1[i] + word2[i]
            }
        }
    } else if (word1.length < word2.length) {
        for (let i = 0; i < word2.length; i++) {
            if (i > word1.length - 1) {
                result += word2[i]
            } else {
                result += word1[i] + word2[i]
            }
        }
    } else {
        for (let i = 0; i < word2.length; i++) {
            result += word1[i] + word2[i]
        }
    }
    return result;
}

mergeAlternately("ab", "pqrs")
//"apbqrs"
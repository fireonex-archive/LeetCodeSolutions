// https://leetcode.com/problems/find-the-k-th-character-in-string-game-i
function kthCharacter(k: number): string {
    let word = "a"
    while (word.length < k) {
        let nextPart = "";
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (char === 'z') {
                nextPart += 'a';
            } else {
                nextPart += String.fromCharCode(char.charCodeAt(0) + 1);
            }
        }
        word += nextPart;
    }
    return word[k - 1]
}

kthCharacter(5)
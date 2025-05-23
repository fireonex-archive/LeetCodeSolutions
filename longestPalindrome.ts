// https://leetcode.com/problems/longest-palindrome

function longestPalindrome(s: string): number {
    const sArr = s.split('');
    const countMap = new Map();
    let palindromeLength = 0
    let uniqueValue = 0
    for (const item of sArr) {
        countMap.set(item, (countMap.get(item) || 0) + 1);
    }
    if (countMap.size === 1) return countMap.values().next().value
    for (const [key, value] of countMap) {
        // console.log(`${key} → ${value}`);
        //key это буква
        //value это сколько раз она встречается в слове
        if (value % 2 === 0) {
            palindromeLength += value
        } else {
            palindromeLength += value - 1;
            uniqueValue++;
        }
    }
    if (uniqueValue > 0) {
        palindromeLength += 1; // Добавляем один центральный символ
    }

    return palindromeLength;
}

// longestPalindrome("abccccdd") //7 - "dccaccd"
longestPalindrome("ababababa") //9
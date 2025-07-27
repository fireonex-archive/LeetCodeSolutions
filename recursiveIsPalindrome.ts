// function isPalindrome(s: string): boolean {
//     if (s.length <= 1) return true
//     const reversedStr = s.split('').reverse().join('')
//     return reversedStr === s
// }

function isPalindrome(s: string): boolean {
    if (s.length <= 1) return true
    const firstLetter = s[0]
    const lastLetter = s[s.length - 1]
    if (firstLetter !== lastLetter) return false

    return isPalindrome(s.slice(1, -1))
}

console.log(isPalindrome("racecar")) //true
console.log(isPalindrome("hello")) //false

// https://leetcode.com/problems/palindrome-number/
function isPalindrome(x: number): boolean {
    let strX = String(x)
    let reversedStr = strX.split('').reverse().join('')
    return (strX === reversedStr)
};
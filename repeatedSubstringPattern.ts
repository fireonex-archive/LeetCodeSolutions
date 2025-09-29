function repeatedSubstringPattern(s: string): boolean {
    if (s.length <= 1) return false;

    const divisors = []
    for (let i = 1; i <= s.length; i++) {
        if (s.length % i === 0) divisors.push(i);
    }

    let pattern = ""
    let results = []

    for (const len of divisors) {
        pattern = s.substring(0, len)
        if (pattern.repeat(s.length / len) === s) {
            results.push(pattern)
        }
    }
    return results.length > 1
}

repeatedSubstringPattern("abcabcabcabc") //true
repeatedSubstringPattern("aba") //false
repeatedSubstringPattern("ababab") //true
repeatedSubstringPattern("abaababaab") //true
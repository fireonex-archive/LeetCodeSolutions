function isSubstringPresent(s: string): boolean {
    const reverseS = s.split('').reverse().join('');
    for (let i = 0; i < s.length; i++) {
        const substr = s[i] + s[i + 1];
        if (reverseS.includes(substr)) {
            return true;
        }
    }
    return false;
}

isSubstringPresent("leetcode");
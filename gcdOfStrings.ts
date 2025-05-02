//https://leetcode.com/problems/greatest-common-divisor-of-strings/description/
function gcdOfStrings(str1: string, str2: string): string {
    function divides(s: string, sub: string): boolean {
        if (s.length % sub.length !== 0) return false;
        return s === sub.repeat(s.length / sub.length);
    }

    let minLen = Math.min(str1.length, str2.length);

    for (let i = minLen; i >= 1; i--) {
        let candidate = str1.substring(0, i);
        if (divides(str1, candidate) && divides(str2, candidate)) {
            return candidate;
        }
    }

    return "";
}

gcdOfStrings("ABCABC", "ABC")//"ABC"
gcdOfStrings("ABABAB", "ABAB")//"AB"

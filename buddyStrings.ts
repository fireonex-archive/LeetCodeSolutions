function buddyStrings(s: string, goal: string): boolean {
    if (s.length !== goal.length) return false;

    if (s === goal) {
        return new Set(s).size < s.length;
    }

    const diff: number[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diff.push(i);
        }
    }

    return diff.length === 2 &&
        s[diff[0]] === goal[diff[1]] &&
        s[diff[1]] === goal[diff[0]];
}

// buddyStrings("ab", "ba") //true
buddyStrings("ab", "ab") //false
// buddyStrings("abcd", "cbad") //true
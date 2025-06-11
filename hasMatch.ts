function hasMatch(s: string, p: string): boolean {
    const starIndex = p.indexOf('*');

    const prefix = p.slice(0, starIndex);
    const suffix = p.slice(starIndex + 1);

    for (let i = 0; i <= s.length - (prefix.length + suffix.length); i++) {
        if (s.startsWith(prefix, i) &&
            s.indexOf(suffix, i + prefix.length) !== -1 &&
            i + prefix.length <= s.indexOf(suffix, i + prefix.length)) {
            const start = i;
            const end = s.indexOf(suffix, start + prefix.length) + suffix.length;
            if (s.slice(start, end).startsWith(prefix) && s.slice(start, end).endsWith(suffix)) {
                return true;
            }
        }
    }

    return false;
}

hasMatch("leetcode", "ee*e") //true
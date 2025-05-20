function isSubsequence(s: string, t: string): boolean {
    // if ([...s].every(char => t.includes(char))) {
    //     let tPurified = [...t].filter((el) => s.includes(el))
    //     return tPurified.join('').includes(s)
    // } else {
    //     return false;
    // }

    let sIndex = 0;
    let tPurified: string[] = [];

    for (let i = 0; i < t.length; i++) {
        const char = t[i]
        if (char === s[sIndex]) {
            tPurified.push(char);
            sIndex++;
        }
        if (sIndex === s.length) break;
    }

    return tPurified.join('') === s;

}

isSubsequence("acb", "ahbgdc") //false
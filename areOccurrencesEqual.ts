function areOccurrencesEqual(s: string): boolean {
    const sMap = new Map();
    for (let letter of s) {
        sMap.set(letter, (sMap.get(letter) || 0) + 1);
    }
    const values = [...sMap.values()]
    for (let i = 0; i < values.length - 1; i++) {
        if (values[i] !== values[i + 1]) {
            return false;
        }
    }
    return true;
}

areOccurrencesEqual("abacbc") //true
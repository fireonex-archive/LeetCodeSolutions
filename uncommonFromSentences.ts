function uncommonFromSentences(s1: string, s2: string): string[] {
    const allWords = (s1 + ' ' + s2).split(' ');
    const freqMap: Record<string, number> = {};

    for (const word of allWords) {
        freqMap[word] = (freqMap[word] || 0) + 1;
    }

    return Object.keys(freqMap).filter(word => freqMap[word] === 1);
}

uncommonFromSentences("this apple is sweet", "this apple is sour") //["sweet","sour"]
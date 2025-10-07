function maxRepeating(sequence: string, word: string): number {
    let k = 0;
    let repeated = word;

    while (sequence.includes(repeated)) {
        k++;
        repeated += word;
    }

    return k;
}

maxRepeating("ababc", "ab") //2
maxRepeating("ababc", "ba") //1
maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba") //5

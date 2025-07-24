function minOperations(s: string): number {
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < s.length; i++) {
        const expectedChar1 = i % 2 === 0 ? '0' : '1';
        const expectedChar2 = i % 2 === 0 ? '1' : '0';

        if (s[i] !== expectedChar1) count1++;
        if (s[i] !== expectedChar2) count2++;
    }

    return Math.min(count1, count2);
}

// minOperations("1111") //2
minOperations("10010100") //3
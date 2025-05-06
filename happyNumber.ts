// https://leetcode.com/problems/happy-number/

function isHappy(n: number): boolean {
    if (n === 1) return true;
    const seen = new Set<number>();
    let counter = n;
    while (!seen.has(counter)) {
        seen.add(counter);

        const digits = String(counter).split('').map(Number);
        let result = 0;

        for (let i = 0; i < digits.length; i++) {
            result += digits[i] * digits[i];
        }

        counter = result;

        if (counter === 1) return true;
    }
    return false;
}

isHappy(7)

// https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/description

function countOccurrences(str: string, search: string): number {
    const regex = new RegExp(search, 'g');
    const match = str.match(regex);
    return match ? match.length : 0;
}

function digitCount(num: string): boolean {
    for (let i = 0; i < num.length; i++) {
        const count = countOccurrences(num, `${i}`)
        if (!(count === Number(num[i]))) return false;
    }
    return true;
}

digitCount("1210") //true
//Explanation:
// num[0] = '1'. The digit 0 occurs once in num.
// num[1] = '2'. The digit 1 occurs twice in num.
// num[2] = '1'. The digit 2 occurs once in num.
// num[3] = '0'. The digit 3 occurs zero times in num.
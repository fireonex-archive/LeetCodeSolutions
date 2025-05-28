//https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards

//Считаем, сколько раз встречается каждая цифра.
// Находим НОД (наибольший общий делитель, GCD) всех этих количеств.
// Если НОД > 1 — деление возможно.

function gcd(...args: number[]): number {
    const binaryGCD = (a: number, b: number): number =>
        b === 0 ? a : binaryGCD(b, a % b);

    return args.reduce((acc, val) => binaryGCD(acc, val));
}

function hasGroupsSizeX(deck: number[]): boolean {
    if (deck.length <= 1) return false
    const sortedDeck = deck.sort((a, b) => a - b);
    const deckMap = new Map()
    for (const item of sortedDeck) {
        deckMap.set(item, (deckMap.get(item) || 0) + 1);
    }
    const valuesArr = Array.from(deckMap.values());
    const result = gcd(...valuesArr)
    return result > 1
}

// hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]) //[1,1],[2,2],[3,3],[4,4] - true
hasGroupsSizeX([1,1,1,2,2,2,3,3]) // false
// hasGroupsSizeX([0,0,0,1,1,1,1,1,1,2,2,2,3,3,3]) //true
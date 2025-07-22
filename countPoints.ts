// https://leetcode.com/problems/rings-and-rods
function countPoints(rings: string): number {
    const colorPositionMap = new Map()
    const splitStr = [];
    for (let i = 0; i < rings.length; i += 2) {
        splitStr.push(rings.substring(i, i + 2));
    }
    for (let el of splitStr) {
        const digit = el[1];
        const color = el[0];

        const currentData = colorPositionMap.get(digit) || {};

        currentData[color] = (currentData[color] || 0) + 1;

        colorPositionMap.set(digit, currentData);
    }

    let result = 0

    for (const [key, value] of colorPositionMap) {
        if (Object.keys(value).length === 3) {
            result++
        }
    }
    return result
}

countPoints("B0B6G0R6R0R6G9") //1
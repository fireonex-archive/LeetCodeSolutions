//https://leetcode.com/problems/count-special-integers/description/
//vers.1
function countSpecialNumbers(n: number): number {
    let count = 0;
    let numArr = Array.from({length: n }, (_, i) => i+1)
    for (let i = 0; i < numArr.length; i++) {
        let el = String(numArr[i]).split('');
        let elSet = new Set(el);
        if (el.length === elSet.size) {
            count++
        }
    }
    return count
}

countSpecialNumbers(135) //110
//todo: add vers.2
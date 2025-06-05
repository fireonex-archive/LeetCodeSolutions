// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits
function sortByBits(arr: number[]): number[] {
    const bitArray = [];

    for (let el of arr) {
        const binaryEl = el.toString(2);
        let bitCounter = 0;
        for (let digit of binaryEl) {
            if (digit === '1') bitCounter++;
        }
        bitArray.push([el, bitCounter]);
    }

    bitArray.sort((a, b) => {
        //a[0] - bitArray element key
        //a[1] - bitArray element value
        if (a[1] === b[1]) return a[0] - b[0];
        return a[1] - b[1];
    });

    const result: number[] = [];
    for (let [num] of bitArray) {
        result.push(num);
    }

    return result;
}

// sortByBits([0,1,2,3,4,5,6,7,8]) //[0,1,2,4,8,3,5,6,7]
// sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]) //[1,2,4,8,16,32,64,128,256,512,1024]
sortByBits([10000,10000]) //[10000,10000]

//Из десятичной в бинарную:
//const dec = 42;
// const binaryStr = dec.toString(2); // "101010"

//Из бинарной строки в десятичное число
//const bin = "1101";
// const dec = parseInt(bin, 2); // 13
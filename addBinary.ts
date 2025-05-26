//https://leetcode.com/problems/add-binary/

function addBinaryBig(a: string, b: string): string {
    const aBig = BigInt('0b' + a);
    const bBig = BigInt('0b' + b);
    const sum = aBig + bBig;
    return sum.toString(2);
}

function addBinary(a: string, b: string): string {
    const aDec = parseInt(a, 2);
    const bDec = parseInt(b, 2);
    const sumDec = aDec + bDec;
    return sumDec.toString(2)
}

addBinary("1010", "1011") //"10101"

//Из десятичной в бинарную:
//const dec = 42;
// const binaryStr = dec.toString(2); // "101010"

//Из бинарной строки в десятичное число
//const bin = "1101";
// const dec = parseInt(bin, 2); // 13
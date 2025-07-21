function replaceChar(str: string, index: number, char: string): string {
    return str.substring(0, index) + char + str.substring(index + 1);
}

function minChanges(n: number, k: number): number {
    let nBinary = n.toString(2)
    let kBinary = k.toString(2)

    const maxLength = Math.max(nBinary.length, kBinary.length);

    nBinary = nBinary.padStart(maxLength, '0');
    kBinary = kBinary.padStart(maxLength, '0');

    let operationsCount = 0

    for (let i = 0; i < kBinary.length; i++) {
        if (kBinary[i] === "0" && nBinary[i] === "1") {
            nBinary = replaceChar(nBinary, i, "0");
            operationsCount++
        }
    }
    if (nBinary === kBinary) {
        return operationsCount;
    } else {
        return -1
    }
}

minChanges(13, 4) //2
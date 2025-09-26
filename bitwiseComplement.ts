function bitwiseComplement(n: number): number {
    const binaryN = n.toString(2)
    let replacementBinaryN = ""
    for (let num of binaryN) {
        if (num === "1") {
            replacementBinaryN += "0"
        } else {
            replacementBinaryN += "1"
        }
    }
    return parseInt(replacementBinaryN, 2)
}

bitwiseComplement(5) //2

//Дополнением целого числа называется целое число,
// которое получается путём замены всех двоичных
// нулей на единицы и всех двоичных единиц на нули в его битовом представлении.
//
// Например, целое число 5 в двоичной системе
// представляется как "101", и его дополнение равно "010", что представляет целое число 2.
//
// Дано целое число n. Верните его дополнение.
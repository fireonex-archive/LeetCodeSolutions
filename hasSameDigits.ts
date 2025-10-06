function operation(s: string): string {
    let sResult = ""
    let value = 0
    for (let i = 0; i < s.length - 1; i++) {
        value = (Number(s[i]) + Number(s[i + 1])) % 10
        sResult += value
    }
    return sResult
}

function hasSameDigits(s: string): boolean {
    if (s.length === 2) {
        return s[0] === s[1]
    }

    const newString = operation(s)
    return hasSameDigits(newString)
}

hasSameDigits("3902") //true

//Дана строка s, состоящая из цифр. Выполняйте следующую операцию
// многократно, пока в строке не останется ровно две цифры:
//
// Для каждой пары последовательных цифр в s, начиная с первой цифры,
// вычислите новую цифру как сумму двух цифр по модулю 10.
// Замените s на последовательность вновь вычисленных цифр, сохраняя
// порядок, в котором они были вычислены.
// Верните true, если две конечные цифры в s одинаковы; в противном
// случае верните false.
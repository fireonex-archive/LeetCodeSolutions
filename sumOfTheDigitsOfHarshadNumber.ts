function sumOfTheDigitsOfHarshadNumber(x: number): number {
    let sumOfDigits = 0;
    let strX = x.toString();
    for (let digit of strX) {
        sumOfDigits += Number(digit);
    }
    if (x % sumOfDigits === 0) return sumOfDigits;
    return -1
}

sumOfTheDigitsOfHarshadNumber(18) //9
// Целое число, делящееся на сумму своих цифр, называется числом Харшад.
// Вам дано целое число x. Верните сумму цифр числа, если число является числом Харшад, иначе -1
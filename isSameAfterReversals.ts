function isSameAfterReversals(num: number): boolean {
    return !(num !== 0 && num.toString().endsWith("0"));

}
isSameAfterReversals(526) //true
isSameAfterReversals(1800) //false
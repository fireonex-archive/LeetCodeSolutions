// https://leetcode.com/problems/number-of-different-integers-in-a-string
function numDifferentIntegers(word: string): number {
    let integerWord = ""
    for (let el of word) {
        if (!(/^\d$/.test(el))) {
            integerWord += " "
        } else {
            integerWord += el
        }
    }
    const integerStrArr = integerWord.split(' ').filter((el) => el !== "")
    const integerArr = integerStrArr.map((el) => el.replace(/^0+/, ""))
    return new Set(integerArr).size
}

numDifferentIntegers("a123bc34d8ef34") //3
numDifferentIntegers("a1b01c001") //1
// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping

let englishAlphabet = "";
for (let i = 97; i <= 122; i++) {
    englishAlphabet += String.fromCharCode(i);
}


function freqAlphabets(s: string): string {
    const lettersNums = []
    const separator = "#"
    for (let i = 0; i <= s.length; i++) {
        let leftLetter = s[i]
        let middleLetter = s[i + 1]
        let rightLetter = s[i + 2]

        if (rightLetter === separator) {
            const str = leftLetter + middleLetter
            lettersNums.push(str)
            i += 1
        } else {
            lettersNums.push(leftLetter)
        }

    }
    const filteredNumeric = lettersNums.filter((el) =>
        typeof el === 'string' ? !isNaN(Number(el)) : false)

    let result = ""

    for (let el of filteredNumeric) {
        result += englishAlphabet[Number(el) - 1]
    }

    return result
}

freqAlphabets("10#11#12") //"jkab"
freqAlphabets("1326#") //"acz"

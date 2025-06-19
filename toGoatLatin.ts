function toGoatLatin(sentence: string): string {
    const sentenceArray = sentence.split(' ');
    for (let i = 0; i < sentenceArray.length; i++) {
        if (/^[aeiou]$/i.test(sentenceArray[i][0])) {
            sentenceArray[i] += "ma"
        } else {
            sentenceArray[i] += sentenceArray[i][0] + "ma"
            sentenceArray[i] = sentenceArray[i].slice(1)
        }
        let aCount = i + 1
        while (aCount) {
            sentenceArray[i] += "a"
            aCount--
        }
    }
    return sentenceArray.join(' ');
}

toGoatLatin("I speak Goat Latin") //"Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
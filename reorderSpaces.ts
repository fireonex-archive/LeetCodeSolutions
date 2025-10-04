function reorderSpaces(text: string): string {
    let allSpaces = 0;
    const words = [] as string[];

    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            allSpaces++;
        }
        if (text[i] !== " ") {
            words.push(text[i]);
        }
        if (text[i] !== " " && text[i + 1] === " ") {
            words.push(" ");
        }
    }

    const sentence = words.join('').trim().split(' ');
    const wordsCount = sentence.length;

    if (wordsCount === 1) {
        return sentence[0] + " ".repeat(allSpaces);
    }

    const currentSpaces = wordsCount - 1;
    const maxSpaceCount = Math.floor(allSpaces / currentSpaces);
    const result = [];

    for (let i = 0; i < sentence.length; i++) {
        result.push(sentence[i]);
        if (!(i === sentence.length - 1)) {
            for (let j = 0; j < maxSpaceCount; j++) {
                result.push(" ");
                allSpaces--;
            }
        }
    }

    if (allSpaces) {
        result.push(" ".repeat(allSpaces));
    }

    return result.join('');
}



reorderSpaces("  this   is  a sentence ") //"this   is   a   sentence"
reorderSpaces(" practice   makes   perfect") //"practice   makes   perfect "
reorderSpaces("  hello") //"hello  "

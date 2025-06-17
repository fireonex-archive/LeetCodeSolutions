function splitWordsBySeparator(words: string[], separator: string): string[] {
    return words
        .map((el) => el.includes(separator) ? el.split(separator) : el)
        .flat()
        .filter((el) => el !== "");
}

splitWordsBySeparator(["one.two.three", "four.five", "six"], ".") //["one","two","three","four","five","six"]
splitWordsBySeparator(["$easy$", "$problem$"], "$") //["easy","problem"]
splitWordsBySeparator(["|||"], "|") //[]
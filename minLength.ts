function minLength(s: string): number {
    let includesSubstrings = s.includes("AB") || s.includes("CD");
    let sCopy = s
    while (includesSubstrings) {
        sCopy = sCopy.split("AB").join("").split("CD").join("")
        includesSubstrings = sCopy.includes("AB") || sCopy.includes("CD")
    }
    return sCopy.length
}

minLength("ABFCACDB") //2
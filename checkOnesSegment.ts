function checkOnesSegment(s: string): boolean {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "0" && s[i + 1] === "1") {
            return false
        }
    }
    return true
}

checkOnesSegment("1001") //false
checkOnesSegment("110") //true

function checkString(s: string): boolean {
    if (!(s.includes("a")) || !s.includes("b")) return true;
    const spitS = s.match(/(.)\1*/g);
    if (!spitS) return false
    if (spitS.length > 2) return false;

    return /^a+$/.test(spitS[0]) && /^b+$/.test(spitS[1]);
}

checkString("aaabbb") //true
checkString("abab") //false
checkString("bbb") //true
checkString("abbbb") //true
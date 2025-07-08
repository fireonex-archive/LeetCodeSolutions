function maxNumberOfBalloons(text: string): number {
    const balloon = "balloon";
    const textArr = text.split("");
    const requiredLettersArr = textArr.filter((el) => balloon.includes(el))
    const requiredLettersMap = new Map()
    for (const element of requiredLettersArr) {
        requiredLettersMap.set(element, (requiredLettersMap.get(element) || 0) + 1);
    }
    if (requiredLettersMap.size !== 5) return 0

    let lLettersCount = requiredLettersMap.get("l")
    let oLettersCount = requiredLettersMap.get("o")
    if (lLettersCount < 2 && oLettersCount < 2) return 0
    requiredLettersMap.set('l', Math.floor(lLettersCount / 2))
    requiredLettersMap.set('o', Math.floor(oLettersCount / 2))

    return Math.min(...requiredLettersMap.values())
}

maxNumberOfBalloons("nlaebolko")
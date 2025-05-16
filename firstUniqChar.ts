function firstUniqChar(s: string): number {const sArr = s.split('');
    const count = new Map<string, number>();
    for (const el of sArr) {
        count.set(el, (count.get(el) || 0) + 1);
    }

    const uniqueArr = sArr.filter(el => count.get(el) === 1);
    if (uniqueArr.length) {
        return sArr.findIndex(x => x === uniqueArr[0]);
    } else {
        return -1
    }

}
firstUniqChar("loveleetcode")


function uniqueOccurrences(arr: number[]): boolean {
    const arrMap = new Map();
    for (const element of arr) {
        arrMap.set(element, (arrMap.get(element) || 0) + 1);
    }
    const arrMapValues = Array.from(arrMap.values());
    const valuesSet = new Set(arrMapValues);
    return valuesSet.size === arrMapValues.length
}

uniqueOccurrences([1,2,2,1,1,3])
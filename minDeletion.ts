function minDeletion(s: string, k: number): number {
    const sMap = new Map<string, number>();

    for (const ch of s) {
        sMap.set(ch, (sMap.get(ch) || 0) + 1);
    }

    if (sMap.size <= k) return 0;

    const sortedFrequencies = [...sMap.values()].sort((a, b) => a - b);

    let toDelete = 0;
    let excess = sMap.size - k;

    for (const freq of sortedFrequencies) {
        if (excess === 0) break;
        toDelete += freq;
        excess--;
    }

    return toDelete;
}


minDeletion('abc', 2) //1
minDeletion('aabb', 2) //0
minDeletion('yyyzz', 1) //2
//Ваша задача — удалить некоторые (возможно, ни одного)
// символы в строке так, чтобы количество различных символов
// в результирующей строке было не более k
//
// Верните минимальное количество удалений, необходимое для достижения этого.
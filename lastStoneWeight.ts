function lastStoneWeight(stones: number[]): number {
    if (stones.length === 1) return stones[0];
    let stonesArr = [...stones];
    do {
        const sortedStones = stonesArr.sort((a, b) => b - a);
        const x = sortedStones.splice(1, 1)[0];
        const y = sortedStones.splice(0, 1)[0];
        if (x !== y) {
            const el = y - x
            sortedStones.push(el)
        }
        stonesArr = sortedStones
        if (stonesArr.length === 1) {
            return stonesArr[0];
        }
    } while (stonesArr.length > 0);
    return 0
}


lastStoneWeight([2, 7, 4, 1, 8, 1]) //1
lastStoneWeight([1]) //1
// На каждом ходу мы выбираем два самых тяжелых камня
// и разбиваем их друг о друга. Предположим, что два
// самых тяжелых камня имеют вес X и Y с x <= y. Результат этого разбивания:
//
// Если x == y, то оба камня разрушены, и
// Если x != y, то камень веса x разрушается, а камень веса y имеет новый вес y - x.
// В конце игры остается максимум один камень.
//
// Верните вес последнего оставшегося камня. Если камней не осталось, верните 0.
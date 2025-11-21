//https://leetcode.com/problems/take-gifts-from-the-richest-pile

function pickGifts(gifts: number[], k: number): number {
    while (k) {
        let maxValue = Math.max(...gifts)
        if (maxValue === 1) break;

        let maxValueIndex = gifts.findIndex((elem) => elem === maxValue)

        let reducedValue = Math.floor(Math.sqrt(maxValue))
        gifts.splice(maxValueIndex, 1, reducedValue);

        k--
    }

    return gifts.reduce((acc, current) => acc + current, 0)
}

pickGifts([25,64,9,4,100], 4) //29
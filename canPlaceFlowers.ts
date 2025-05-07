// https://leetcode.com/problems/can-place-flowers
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        const prev = i === 0 ? 0 : flowerbed[i - 1];
        const next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];

        if (flowerbed[i] === 0 && prev === 0 && next === 0) {
            flowerbed[i] = 1;
            count++;
        }

        if (count >= n) return true;
    }

    return count >= n;
}
canPlaceFlowers([1,0,0,0,0], 2)
function getCommon(nums1: number[], nums2: number[]): number {
    const minValueArr = [] as number[];
    for (let el of nums1) {
        const value = binarySearch(nums2, el);
        if (value !== -1) {
            minValueArr.push(el)
        }
    }
    let min = Infinity;
    for (const num of minValueArr) {
        if (num < min) min = num;
    }
    return min === Infinity ? -1 : min;
}

function binarySearch(arr:number[], target: number) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return arr[mid];
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

getCommon([1, 2, 3], [2, 4]) //2
function containsPattern(arr: number[], m: number, k: number): boolean {
    if (m * k > arr.length) return false;
    if (m === 0 || k === 0) return false;

    for (let i = 0; i <= arr.length - m * k; i++) {
        let patternMatched = true;
        for (let j = 1; j < k && patternMatched; j++) {
            for (let l = 0; l < m && patternMatched; l++) {
                if (arr[i + l] !== arr[i + j * m + l]) {
                    patternMatched = false;
                }
            }
        }
        if (patternMatched) {
            return true;
        }
    }
    return false;
}

containsPattern([1,2,1,2,1,1,1,3], 2, 2) //true
containsPattern([2,2,2,2], 2, 3) //false
function binaryGap(n: number): number {
    const binaryStr = n.toString(2);
    let maxDistance = 0;
    let lastOneIndex = -1;

    for (let i = 0; i < binaryStr.length; i++) {
        if (binaryStr[i] === "1") {
            if (lastOneIndex !== -1) {
                maxDistance = Math.max(maxDistance, i - lastOneIndex);
            }
            lastOneIndex = i;
        }
    }

    return maxDistance;
}


binaryGap(22) //2
binaryGap(5) //2
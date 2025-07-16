type rowColor = "red" | "blue"

function maxHeightForStartingColor(red: number, blue: number, startColor: rowColor): number {
    let height = 0;
    let currentColor = startColor;
    let requiredBalls = 1;

    while (true) {
        if (currentColor === "red" && red >= requiredBalls) {
            red -= requiredBalls;
            height++;
            currentColor = "blue";
        } else if (currentColor === "blue" && blue >= requiredBalls) {
            blue -= requiredBalls;
            height++;
            currentColor = "red";
        } else {
            break;
        }
        requiredBalls++;
    }

    return height;
}

function maxHeightOfTriangle(red: number, blue: number): number {
    const heightStartingRed = maxHeightForStartingColor(red, blue, "red");
    const heightStartingBlue = maxHeightForStartingColor(red, blue, "blue");
    return Math.max(heightStartingRed, heightStartingBlue);
}

maxHeightOfTriangle(2, 4)  //3
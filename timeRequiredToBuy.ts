function timeRequiredToBuy(tickets: number[], k: number): number {
    let currentPersonIndex = k;
    let secondsCounter = 0;
    while (!(currentPersonIndex === 0 && tickets[currentPersonIndex] === 1)) {
        tickets[0]--
        if (currentPersonIndex === 0) {
            currentPersonIndex = tickets.length - 1
        } else {
            currentPersonIndex--
        }
        secondsCounter++
        if (tickets[0] > 0) {
            tickets.push(tickets[0]);
        }
        tickets.splice(0, 1)
    }
    return secondsCounter + 1
}

timeRequiredToBuy([2, 3, 2], 2) //6
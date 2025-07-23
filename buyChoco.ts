function buyChoco(prices: number[], money: number): number {
    prices.sort((a, b) => a - b);
    const minCount = prices[0] + prices[1];
    if (money - minCount >= 0) {
        return money - minCount
    } else return money
}

buyChoco([1, 2, 2], 3) //0
function accountBalanceAfterPurchase(purchaseAmount: number): number {
    const balance = 100
    const roundedPurchaseAmount = Math.round(purchaseAmount / 10) * 10
    return balance - roundedPurchaseAmount
}

accountBalanceAfterPurchase(9) //90
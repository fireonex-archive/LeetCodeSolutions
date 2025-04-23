// https://leetcode.com/problems/richest-customer-wealth/
function maximumWealth(accounts: number[][]): number {
    let resultArr = []
    for (let i = 0; i < accounts.length; i++) {
        let customerMoney = accounts[i]
        let customerSumOfMoney = 0
        for (let j = 0; j < customerMoney.length; j++) {
            customerSumOfMoney += customerMoney[j]
        }
        resultArr.push(customerSumOfMoney)
    }
    return Math.max(...resultArr)
}
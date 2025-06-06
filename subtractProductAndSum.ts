// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer
function subtractProductAndSum(n: number): number {
    const nArray: number[] = n.toString().split('').map(n => Number(n));
    let product = 1;
    let sum = 0;
    for (let digit of nArray) {
        product = digit * product;
        sum += digit;
    }
    return product - sum;
}
subtractProductAndSum(234) //15
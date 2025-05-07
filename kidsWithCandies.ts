// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let maxValue = Math.max.apply(Math, candies);
    let resultArr = []
    for (let i = 0; i < candies.length; i++) {
        if ((candies[i] + extraCandies) >= maxValue) {
            resultArr.push(true)
        } else {
            resultArr.push(false)
        }
    }
    return resultArr
}

kidsWithCandies([2,3,5,1,3], 3)
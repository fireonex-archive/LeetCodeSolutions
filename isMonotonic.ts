function isMonotonic(nums: number[]): boolean {
    const monotonIncreasingArr = [...nums].sort((a, b) => a - b);
    const isMonotonIncreasing = JSON.stringify(nums) === JSON.stringify(monotonIncreasingArr)
    const monotonDecreasingArr = [...nums].sort((a, b) => b - a);
    const isMonotonDecreasing = JSON.stringify(nums) === JSON.stringify(monotonDecreasingArr)
    return (isMonotonDecreasing || isMonotonIncreasing);
}
isMonotonic([1,2,2,3])
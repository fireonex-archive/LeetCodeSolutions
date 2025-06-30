// https://leetcode.com/problems/first-bad-version
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const n = 5, bad = 4
var solution = function (isBadVersion: any) {
    return function(n: number): number {
        let left = 1;
        let right = n;

        while (left < right) {
            const mid = Math.floor(left + (right - left) / 2);

            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };
};

function isBadVersion(version: number): boolean {
    return (version >= bad)
}

solution(isBadVersion)
//input: n = 5, bad = 4, output: 4
//isBadVersion(3) -> false
//isBadVersion(5) -> true

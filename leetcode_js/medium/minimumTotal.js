/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const n = triangle.length;
    const dp = [...triangle[n - 1]];
    for (let r = n - 2; r >= 0; r--) {
        for (let i = 0; i <= r; i++) {
            dp[i] = triangle[r][i] + Math.min(dp[i], dp[i + 1]);
        }
    }

    return dp[0];
};
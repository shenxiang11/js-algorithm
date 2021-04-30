/**
 * @param {number} n
 * @return {number}
 */
const waysToStep = function(n) {
    let dp = [
        1,
        1,
        2
    ];
    let result;
    if (n < 3) {
        result = dp[n];
    }
    for (let i = 3; i <= n; i++) {
        result = (dp[0] + dp[1] + dp[2]) % 1000000007;
        dp = [dp[1], dp[2], result];
    }
    return result;
};

export default waysToStep;

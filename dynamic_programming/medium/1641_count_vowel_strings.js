/**
 * @param {number} n
 * @return {number}
 */
const countVowelStrings = function(n) {
    let dp = [
        [],
    ];
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total = 0;
        dp[i] = [];
        for (let idx = 4; idx >= 0; idx--) {
            dp[i][idx] = (!dp[i][idx + 1] && !dp[i - 1][idx]) ? 1 : (dp[i][idx + 1] ?? 0) + (dp[i - 1][idx] ?? 0);
            total += dp[i][idx];
        }
    }
    return total;
};

export default countVowelStrings;

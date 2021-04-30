/**
 * @param {number[]} nums
 * @return {number}
 */
const massage = function(nums) {
    if (!nums || !nums.length) {
        return 0;
    }
    let dp = [0, nums[0]] // [未选择， 选择];
    for (let i = 1, len = nums.length; i < len; i++) {
        dp = [
            Math.max(...dp),
            dp[0] + nums[i],
        ];
    }
    return Math.max(...dp);
};

export default massage;

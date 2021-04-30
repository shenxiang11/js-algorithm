/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    let dp = nums[0];
    let max = nums[0];
    for (let i = 1, len = nums.length; i < len; i++) {
        dp = Math.max(dp + nums[i], nums[i]);
        max = Math.max(dp, max);
    }
    return max;
};

export default maxSubArray;

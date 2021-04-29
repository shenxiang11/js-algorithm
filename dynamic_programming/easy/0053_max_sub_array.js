const maxSubArray = function(nums) {
    let max = nums[0];
    let prev = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        prev = Math.max(prev + nums[i], nums[i]);
        max = Math.max(max, prev);
    }
    return max;
};

export default maxSubArray;

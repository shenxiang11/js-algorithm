// TODO: 目前性能差

const maxSubArray = function(nums) {
    let max = -Infinity;
    for (let i = 0, len = nums.length; i < len; i++) {
        let arr = [nums[i]];
        for (let j = i + 1; j < len; j++) {
            arr[j - i] = arr[j - i - 1] + nums[j];
        }
        max = Math.max(...arr, max);
    }
    return max;
};

export default maxSubArray;

// TODO: 使用二分法

const missingNumber = function(nums) {
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
};

export default missingNumber;

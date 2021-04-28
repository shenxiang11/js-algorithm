// TODO: 使用二分法

const findMagicIndex = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === i) {
            return i;
        }
    }

    return -1;
};

export default findMagicIndex;

const twoSum = function(nums, target) {
    const m = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (m.has(nums[i])) {
            return [m.get(nums[i]), i];
        } else {
            m.set(target - nums[i], i);
        }
    }
};

export default twoSum;

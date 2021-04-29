// 任何数和 0 做异或运算，结果仍然是原来的数
// 任何数和其自身做异或运算，结果是 0
// 异或运算满足交换律和结合律

const singleNumber = function(nums) {
    let n = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        n ^= nums[i];
    }
    return n;
};

export default singleNumber;

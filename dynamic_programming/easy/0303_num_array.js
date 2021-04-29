/**
 * @param {number[]} nums
 */
const NumArray = function(nums) {
    let arr = [];
    for (let i = 0, len = nums.length; i < len; i++) {
        arr[i] = (arr[i - 1] ?? 0) + nums[i];
    }
    this._sum = arr;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this._sum[right] - (this._sum[left - 1] ?? 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

export default NumArray;

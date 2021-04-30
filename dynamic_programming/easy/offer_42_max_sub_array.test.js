// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

// 要求时间复杂度为O(n)。

//  

// 示例1:

// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
//  

// 提示：

// 1 <= arr.length <= 10^5
// -100 <= arr[i] <= 100
import maxSubArray from './offer_42_max_sub_array';

test('maxSubArray:1', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});


test('maxSubArray:2', () => {
    expect(maxSubArray([-2, 1])).toBe(1);
});

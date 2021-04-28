// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

// 示例 1：

// 输入：[3,4,5,1,2]
// 输出：1
// 示例 2：

// 输入：[2,2,2,0,1]
// 输出：0

import minArray from './offer_11_min_array';


test('minArray:1', () => {
    expect(minArray([3, 4, 5, 1, 2])).toBe(1);
});

test('minArray:2', () => {
    expect(minArray([2, 2, 2, 0, 1])).toBe(0);
});

test('minArray:3', () => {
    expect(minArray([2, 2, 2, 1])).toBe(1);
});

test('minArray:4', () => {
    expect(minArray([1, 3, 5])).toBe(1);
});

test('minArray:5', () => {
    expect(minArray([3, 1])).toBe(1);
});

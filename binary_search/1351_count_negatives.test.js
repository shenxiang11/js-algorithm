// 给你一个 m * n 的矩阵 grid，矩阵中的元素无论是按行还是按列，都以非递增顺序排列。 

// 请你统计并返回 grid 中 负数 的数目。

//  

// 示例 1：

// 输入：grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// 输出：8
// 解释：矩阵中共有 8 个负数。
// 示例 2：

// 输入：grid = [[3,2],[1,0]]
// 输出：0
// 示例 3：

// 输入：grid = [[1,-1],[-1,-1]]
// 输出：3
// 示例 4：

// 输入：grid = [[-1]]
// 输出：1
//  

// 提示：

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100
//  

// 进阶：你可以设计一个时间复杂度为 O(n + m) 的解决方案吗？

import countNegatives from './1351_count_negatives';

test('countNegatives:1', () => {
    expect(countNegatives(
        [
            [4, 3, 2, -1],
            [3, 2, 1, -1],
            [1, 1, -1, -2],
            [-1, -1, -2, -3]
        ]
    )).toBe(8);
});

test('countNegatives:2', () => {
    expect(countNegatives([
        [3, 2], 
        [1, 0]
    ])).toBe(0);
});

test('countNegatives:3', () => {
    expect(countNegatives([
        [1, -1],
        [-1, -1]
    ])).toBe(3);
});

test('peakIndexInMountainArray:4', () => {
    expect(countNegatives([
        [-1]
    ])).toBe(1);
});

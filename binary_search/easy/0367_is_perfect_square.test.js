// 给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

// 进阶：不要 使用任何内置的库函数，如  sqrt 。

//  

// 示例 1：

// 输入：num = 16
// 输出：true
// 示例 2：

// 输入：num = 14
// 输出：false
//  

// 提示：

// 1 <= num <= 2^31 - 1

import isPerfectSquare from './0367_is_perfect_square';

test('isPerfectSquare:1', () => {
    expect(isPerfectSquare(16)).toBe(true);
});

test('isPerfectSquare:2', () => {
    expect(isPerfectSquare(14)).toBe(false);
});

test('isPerfectSquare:3', () => {
    expect(isPerfectSquare(1)).toBe(true);
});


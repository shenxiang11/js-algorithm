import twoSum from './0167_two_sum';

test('twoSum:1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
});

test('twoSum:2', () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
});

test('twoSum:3', () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
});

test('twoSum:4', () => {
    expect(twoSum([], -1)).toEqual([-1, -1]);
});


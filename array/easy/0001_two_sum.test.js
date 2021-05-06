import twoSum from './0001_two_sum';

test('twoSum:1', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
});

test('twoSum:2', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual(expect.arrayContaining([1, 2]));
});

test('twoSum:2', () => {
    expect(twoSum([3, 3], 6)).toEqual(expect.arrayContaining([0, 1]));
});

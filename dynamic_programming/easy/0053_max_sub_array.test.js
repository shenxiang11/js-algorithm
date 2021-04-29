import maxSubArray from './0053_max_sub_array';

test('maxSubArray:1', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});

test('maxSubArray:2', () => {
    expect(maxSubArray([1])).toBe(1);
});

test('maxSubArray:3', () => {
    expect(maxSubArray([0])).toBe(0);
});

test('maxSubArray:4', () => {
    expect(maxSubArray([-1])).toBe(-1);
});

test('maxSubArray:5', () => {
    expect(maxSubArray([-100000])).toBe(-100000);
});

import NumArray from './0303_num_array';

test('NumArray:1', () => {
    let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);

    expect(numArray.sumRange(0, 2)).toBe(1);
    expect(numArray.sumRange(2, 5)).toBe(-1);
    expect(numArray.sumRange(0, 5)).toBe(-3);
});

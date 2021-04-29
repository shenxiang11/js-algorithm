import singleNumber from './0136_single_number';

test('singleNumber:1', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
});

test('singleNumber:2', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
});

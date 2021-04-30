import countBits from './0338_count_bits';

test('countBits:1', () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
});

test('countBits:2', () => {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
});

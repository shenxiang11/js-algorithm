import maxSubArray from './offer_42_max_sub_array';

test('maxSubArray:1', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});


test('maxSubArray:2', () => {
    expect(maxSubArray([-2, 1])).toBe(1);
});

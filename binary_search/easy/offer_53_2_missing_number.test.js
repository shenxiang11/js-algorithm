import missingNumber from './offer_53_2_missing_number';

test('missingNumber:1', () => {
    expect(missingNumber([0, 1, 3])).toBe(2);
});

test('missingNumber:2', () => {
    expect(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9])).toBe(8);
});

test('missingNumber:3', () => {
    expect(missingNumber([0])).toBe(1);
});

test('missingNumber:4', () => {
    expect(missingNumber([1])).toBe(0);
});

import myPow from './0050_my_pow';

test('myPow:1', () => {
    expect(myPow(2.00000, 10)).toBeCloseTo(2.00000 ** 10);
});

test('twoSum:2', () => {
    expect(myPow(2.1, 3)).toBeCloseTo(2.1 ** 3);
});

test('twoSum:3', () => {
    expect(myPow(2.00000, -2)).toBeCloseTo(2.0000 ** -2);
});

test('twoSum:4', () => {
    expect(myPow(0.00001, 2147483647)).toBeCloseTo(0.0001 ** 2147483647);
});

import minArray from './offer_11_min_array';

test('minArray:1', () => {
    expect(minArray([3, 4, 5, 1, 2])).toBe(1);
});

test('minArray:2', () => {
    expect(minArray([2, 2, 2, 0, 1])).toBe(0);
});

test('minArray:3', () => {
    expect(minArray([2, 2, 2, 1])).toBe(1);
});

test('minArray:4', () => {
    expect(minArray([1, 3, 5])).toBe(1);
});

test('minArray:5', () => {
    expect(minArray([3, 1])).toBe(1);
});

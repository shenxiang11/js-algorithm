import isValid from './0020_is_valid';

test('maxSubArray:1', () => {
    expect(isValid("()")).toBe(true);
});

test('maxSubArray:2', () => {
    expect(isValid("()[]{}")).toBe(true);
});

test('maxSubArray:3', () => {
    expect(isValid("(]")).toBe(false);
});

test('maxSubArray:4', () => {
    expect(isValid("([)]")).toBe(false);
});

test('maxSubArray:5', () => {
    expect(isValid("{[]}")).toBe(true);
});

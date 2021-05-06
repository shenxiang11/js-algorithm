import isPerfectSquare from './0367_is_perfect_square';

test('isPerfectSquare:1', () => {
    expect(isPerfectSquare(16)).toBe(true);
});

test('isPerfectSquare:2', () => {
    expect(isPerfectSquare(14)).toBe(false);
});

test('isPerfectSquare:3', () => {
    expect(isPerfectSquare(1)).toBe(true);
});


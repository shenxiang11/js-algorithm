import divisorGame from './1025_divisor_game';

test('divisorGame:1', () => {
    expect(divisorGame(2)).toBe(true);
});

test('divisorGame:2', () => {
    expect(divisorGame(3)).toBe(false);
});

test('divisorGame:3', () => {
    expect(divisorGame(4)).toBe(true);
});

test('divisorGame:4', () => {
    expect(divisorGame(5)).toBe(false);
});

test('divisorGame:5', () => {
    expect(divisorGame(8)).toBe(true);
});

test('divisorGame:6', () => {
    expect(divisorGame(10)).toBe(true);
});
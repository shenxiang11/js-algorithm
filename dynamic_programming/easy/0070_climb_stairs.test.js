import ClimbStairs from './0070_climb_stairs';

test('ClimbStairs:1', () => {
    expect(ClimbStairs(2)).toBe(2);
});

test('ClimbStairs:2', () => {
    expect(ClimbStairs(3)).toBe(3);
});

test('ClimbStairs:3', () => {
    expect(ClimbStairs(45)).toBe(1836311903);
});


import search from './0704_search';

test('search:1', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});

test('search:2', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});
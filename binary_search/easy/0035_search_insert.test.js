import searchInsert from './0035_search_insert';

test('searchInsert:1', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

test('searchInsert:2', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});

test('searchInsert:3', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});

test('searchInsert:4', () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
});

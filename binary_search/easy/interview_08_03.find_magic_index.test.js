import findMagicIndex from './interview_08_03.find_magic_index';


test('findMagicIndex:1', () => {
    expect(findMagicIndex([0, 2, 3, 4, 5])).toBe(0);
});

test('findMagicIndex:2', () => {
    expect(findMagicIndex([1, 1, 1])).toBe(1);
});

test('findMagicIndex:3', () => {
    expect(findMagicIndex([0, 0, 2])).toBe(0);
});

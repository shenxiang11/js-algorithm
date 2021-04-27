import sqrt from './0069_sqrt';

test('sqrt:1', () => {
    expect(sqrt(4)).toBe(2);
});

test('sqrt:2', () => {
    expect(sqrt(8, 2)).toBe(2);
});

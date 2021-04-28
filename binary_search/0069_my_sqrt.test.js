import mySqrt from './0069_my_sqrt';

test('mySqrt:1', () => {
    expect(mySqrt(4)).toBe(2);
});

test('mySqrt:2', () => {
    expect(mySqrt(8, 2)).toBe(2);
});

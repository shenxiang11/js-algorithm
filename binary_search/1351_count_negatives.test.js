import countNegatives from './1351_count_negatives';

test('countNegatives:1', () => {
    expect(countNegatives(
        [
            [4, 3, 2, -1],
            [3, 2, 1, -1],
            [1, 1, -1, -2],
            [-1, -1, -2, -3]
        ]
    )).toBe(8);
});

test('countNegatives:2', () => {
    expect(countNegatives([
        [3, 2], 
        [1, 0]
    ])).toBe(0);
});

test('countNegatives:3', () => {
    expect(countNegatives([
        [1, -1],
        [-1, -1]
    ])).toBe(3);
});

test('peakIndexInMountainArray:4', () => {
    expect(countNegatives([
        [-1]
    ])).toBe(1);
});

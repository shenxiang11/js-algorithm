import peakIndexInMountainArray from './0852_peak_index_in_mountain_array';

test('peakIndexInMountainArray:1', () => {
    expect(peakIndexInMountainArray([0, 1, 0])).toBe(1);
});

test('peakIndexInMountainArray:2', () => {
    expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1);
});

test('peakIndexInMountainArray:3', () => {
    expect(peakIndexInMountainArray([0, 10, 5, 2])).toBe(1);
});

test('peakIndexInMountainArray:4', () => {
    expect(peakIndexInMountainArray([3, 4, 5, 1])).toBe(2);
});

test('peakIndexInMountainArray:5', () => {
    expect(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19])).toBe(2);
});

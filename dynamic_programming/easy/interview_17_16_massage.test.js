import massage from './interview_17_16_massage';

test('massage:1', () => {
    expect(massage([1, 2, 3, 1])).toBe(4);
});

test('massage:2', () => {
    expect(massage([2, 7, 9, 3, 1])).toBe(12);
});

test('massage:3', () => {
    expect(massage([2, 1, 4, 5, 3, 1, 1, 3])).toBe(12);
});

test('massage:4', () => {
    expect(massage([])).toBe(0);
});

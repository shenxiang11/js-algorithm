import waysToStep from './interview_08_10_ways_to_step';

test('waysToStep:1', () => {
    expect(waysToStep(3)).toBe(4);
});

test('waysToStep:2', () => {
    expect(waysToStep(5)).toBe(13);
});

test('waysToStep:3', () => {
    expect(waysToStep(2)).toBe(2);
});

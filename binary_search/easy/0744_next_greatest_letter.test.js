import nextGreatestLetter from './0744_next_greatest_letter';

test('nextGreatestLetter:1', () => {
    expect(nextGreatestLetter(["c", "f", "j"], "a")).toBe("c");
});

test('nextGreatestLetter:2', () => {
    expect(nextGreatestLetter(["c", "f", "j"], "d")).toBe("f");
});

test('nextGreatestLetter:3', () => {
    expect(nextGreatestLetter(["c", "f", "j"], "g")).toBe("j");
});

test('nextGreatestLetter:4', () => {
    expect(nextGreatestLetter(["c", "f", "j"], "j")).toBe("c");
});

test('nextGreatestLetter:5', () => {
    expect(nextGreatestLetter(["c", "f", "j"], "k")).toBe("c");
});

test('nextGreatestLetter:6', () => {
    expect(nextGreatestLetter(["a", "b"], "z")).toBe("a");
});

import findString from './interview_10_05_find_string';

test('findString:1', () => {
    expect(findString(["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], "ta")).toBe(-1);
});

test('findString:2', () => {
    expect(findString(["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], "ball")).toBe(4);
});

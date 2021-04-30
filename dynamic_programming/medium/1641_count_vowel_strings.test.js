import countVowelStrings from './1641_count_vowel_strings';

test('countVowelStrings:1', () => {
    expect(countVowelStrings(1)).toBe(5);
});

test('countVowelStrings:2', () => {
    expect(countVowelStrings(2)).toBe(15);
});

test('countVowelStrings:3', () => {
    expect(countVowelStrings(33)).toBe(66045);
});

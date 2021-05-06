import isSubsequence from './0392.is_subsequence';

test('isSubsequence:1', () => {
    expect(isSubsequence("abc", "ahbgdc")).toBe(true);
});

test('isSubsequence:2', () => {
    expect(isSubsequence("axc", "ahbgdc")).toBe(false);
});

test('isSubsequence:3', () => {
    expect(isSubsequence("aaaaaa", "bbaaaa")).toBe(false);
});
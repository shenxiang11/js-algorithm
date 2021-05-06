import solution from './0278_is_bad_version';

const mockIsBadVersion = jest.fn().mockImplementation(version => {
    return version >= 4;
});

test('isBadVersion:1', () => {
    expect(solution(mockIsBadVersion)(5)).toBe(4);
});

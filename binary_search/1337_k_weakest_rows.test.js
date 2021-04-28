import kWeakestRows from './1337_k_weakest_rows';

test('kWeakestRows:1', () => {
    expect(kWeakestRows([
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 1, 1, 1]
    ],3)).toEqual([2, 0, 3]);
});

test('kWeakestRows:2', () => {
    expect(kWeakestRows([
        [1, 0, 0, 0],
        [1, 1, 1, 1],
        [1, 0, 0, 0],
        [1, 0, 0, 0]
    ], 2)).toEqual([0, 2]);
});

test('kWeakestRows:3', () => {
    expect(kWeakestRows([
        [1, 0],
        [0, 0],
        [1, 0]
    ], 2)).toEqual([1, 0]);
});

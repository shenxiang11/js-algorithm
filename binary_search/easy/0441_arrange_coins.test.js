import arrangeCoins from './0441_arrange_coins';

test('arrangeCoins:1', () => {
    expect(arrangeCoins(5)).toBe(2);
});

test('arrangeCoins:2', () => {
    expect(arrangeCoins(8)).toBe(3);
});

import search from './offer_53_1_search';

test('search:1', () => {
    expect(search([5, 7, 7, 8, 8, 10], 8)).toBe(2);
});

test('search:2', () => {
    expect(search([5, 7, 7, 8, 8, 10], 6)).toBe(0);
});
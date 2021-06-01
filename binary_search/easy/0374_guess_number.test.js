import guessNumber from './0374_guess_number';

function createGuess(pick) {
    return (n) => {
        if (n === pick) {
            return 0;
        } 
        return n > pick ? -1 : 1;
    };
}

test('guessNumber:1', () => {
    globalThis.guess = jest.fn().mockImplementation(createGuess(6));

    expect(guessNumber(10)).toBe(6);
});

test('guessNumber:2', () => {
    globalThis.guess = jest.fn().mockImplementation(createGuess(1));

    expect(guessNumber(1)).toBe(1);
});

test('guessNumber:3', () => {
    globalThis.guess = jest.fn().mockImplementation(createGuess(1));

    expect(guessNumber(2)).toBe(1);
});

test('guessNumber:4', () => {
    globalThis.guess = jest.fn().mockImplementation(createGuess(2));

    expect(guessNumber(2)).toBe(2);
});

test('guessNumber:5', () => {
    globalThis.guess = jest.fn().mockImplementation(createGuess(1));

    expect(guessNumber(1)).toBe(1);
});

test('guessNumber:6', () => {
    globalThis.guess = jest.fn().mockImplementation(createGuess(99));
    expect(guessNumber(100)).toBe(99);
});


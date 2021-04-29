const divisorGame = function(n) {
    let m = new Set([2]);

    for (let c = 4; c <=n; c++) {
        for (let i = 1; i <= c/2; i++) {
            if (c % i === 0 && !m.has(c - i)) {
                m.add(c);
                break;
            }
        }
    }
    return m.has(n);
};

export default divisorGame;

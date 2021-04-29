const divisorGame = function(n) {
    let m = {
        2: true,
    }

    for (let c = 4; c <=n; c++) {
        for (let i = 1; i <= c/2; i++) {
            if (c % i === 0 && !m[c - i]) {
                m[c] = true;
                break;
            }
        }
    }
    return !!m[n];
};

export default divisorGame;

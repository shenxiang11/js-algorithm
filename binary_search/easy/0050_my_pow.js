const myPow = function(x, n) {
    if (n === 0) {
        return 1;
    } else if (n > 0) {
        if (n % 2 === 0) {
            let r = myPow(x, n / 2);
            return r * r;
        } else {
            let r = myPow(x, (n - 1) / 2);
            return x * r * r;
        }
    } else {
        return 1 / myPow(x, -n);
    }
};

export default myPow;

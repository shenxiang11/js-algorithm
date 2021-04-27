const arrangeCoins = (n) => {
    let start = 0;
    let end = n;
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if ((mid + 1) * mid / 2 < n) {
            if ((mid + 1 + 1) * (mid + 1) / 2 > n) {
                return mid;
            }
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;
};

export default arrangeCoins;

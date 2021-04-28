const isPerfectSquare = function(num) {
    let start = 1;
    let end = num;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (mid * mid === num) {
            return true;
        } else {
            if (mid * mid < num) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return false;
};

export default isPerfectSquare;

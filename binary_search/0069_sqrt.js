const sqrt = (n) => {
    let start = 0;
    let end = n;
    while (start < end) {
        let mid = start + (end - start) / 2;
        if (mid ** 2 < n) {
            if ((mid + 1) ** 2 > n) {
                return mid;
            }
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;
}

export default sqrt;

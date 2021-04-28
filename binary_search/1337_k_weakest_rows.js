const kWeakestRows = function(mat, k) {
    if (!mat || !k) {
        return [];
    }
    let newMat = mat.map((item, idx) => {
        let left = 0;
        let right = item.length - 1;
        while(left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (item[mid] === 1 && (item[mid + 1] === 0 || item[mid + 1] === undefined)) {
                return [idx, mid + 1];
            } else if (item[mid] === 0) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return [idx, 0];
    });
    newMat.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });
    return newMat.map(item => item[0]).slice(0, k);
};

export default kWeakestRows;

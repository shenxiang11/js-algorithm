/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0;
        let end = n + 1;
        while (start < end) {
            let mid = Math.floor(start + (end - start) / 2);
            if (isBadVersion(mid) && !isBadVersion(mid - 1)) {
                return mid;
            } else if (isBadVersion(mid) && isBadVersion(mid - 1)) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return -1
    };
};

export default solution;

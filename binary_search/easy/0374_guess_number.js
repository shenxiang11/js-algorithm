/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}a
 */
const guessNumber = function(n) {
    let start = 1;
    let end = n + 1;
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (guess(mid) === 0) {
            return mid;
        } else if (guess(mid) === 1) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
};

export default guessNumber;
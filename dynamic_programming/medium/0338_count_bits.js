// TODO: 动态规划

/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = function(num) {
    function calc(n) {
        let count = 0;
        while(n) {
            if (n & 1 === 1) {
                count += 1;
            }
            n = n >> 1;
        }
        return count;
    }

    let result = [];
    for (let i = 0; i <= num; i++) {
        result.push(calc(i));
    }
    return result;
};

export default countBits;

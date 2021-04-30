/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    let stack = [];
    let m = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    for (let i = 0, len = s.length; i < len; i++) {
        let peek = stack[stack.length - 1];
        if (s[i] !== m[peek]) {
            if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
                return false;
            }
            stack.push(s[i]);
        } else {
            stack.pop();
        }
    }

    return stack.length === 0;
};

export default isValid;

// TODO: 使用二分法

const isSubsequence = function(s, t) {
    for (let sc of s) {
        let idx = t.indexOf(sc);
        if (idx === - 1) {
            return false;
        }
        t = t.slice(idx + 1);
    }
    return true;
};

export default isSubsequence;

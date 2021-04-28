const countNegatives = function(grid) {
    if (!grid) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        let idx = grid[i].findIndex(i => i < 0); // 二分查找找到第一个负数，转化单调递减的数组找第一个负数的问题
        if (idx != -1) {
            count += grid[i].length - idx;
        }
    }
    return count;
};

export default countNegatives;

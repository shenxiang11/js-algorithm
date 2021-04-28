const countNegatives = function(grid) {
    if (!grid) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        if (grid[i][0] < 0) {
            count += grid[i].length;
        } else {
            let left = 0;
            let right = grid[i].length;
            while(left < right) {
                let mid = Math.floor(left + (right - left) / 2);
                if (grid[i][mid] >= 0 && (grid[i][mid + 1] < 0)) {
                    count += grid[i].length - 1 - mid;
                    break;
                } else if (grid[i][mid] < 0) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
        }
    }
    return count;
};

export default countNegatives;

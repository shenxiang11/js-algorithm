const twoSum = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
        let left = i + 1;
        let right = numbers.length - 1;
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            console.log(left, right, mid);
            if (target - numbers[mid] === numbers[i]) {
                return [i + 1, mid + 1];
            } else if (target - numbers[mid] < numbers[i]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return [-1, -1];
};

export default twoSum;

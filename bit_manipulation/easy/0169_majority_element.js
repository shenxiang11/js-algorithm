// TODO: 位运算 

const majorityElement = function(nums) {
    const map = new Map();
    nums.forEach(num => {
        let prev = map.get(num) ?? 0;
        map.set(num, prev + 1);
    });
    for (let [num, count] of map) {
        if (count > nums.length / 2) {
            return num;
        }
    }
};

export default majorityElement;

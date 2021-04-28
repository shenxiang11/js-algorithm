// TODO: 使用二分法

const nextGreatestLetter = function(letters, target) {
    return letters.find(item => item > target) || letters[0];
};

export default nextGreatestLetter;

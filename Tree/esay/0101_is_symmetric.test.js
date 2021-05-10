import isSymmetric from './0101_is_symmetric';

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

test('isSymmetric:1', () => {
    const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));
    expect(isSymmetric(root)).toBe(true);
});

test('isSymmetric:2', () => {
    const root = new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3)));
    expect(isSymmetric(root)).toBe(false);
});


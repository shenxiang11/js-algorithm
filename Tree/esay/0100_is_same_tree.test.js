import isSameTree from './0100_is_same_tree';

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

test('isSameTree:1', () => {
    const pRoot = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const qRoot = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    expect(isSameTree(pRoot, qRoot)).toBe(true);
});

test('isSameTree:2', () => {
    const pRoot = new TreeNode(1, new TreeNode(2));
    const qRoot = new TreeNode(1, null, new TreeNode(3));
    expect(isSameTree(pRoot, qRoot)).toBe(false);
});

test('isSameTree:3', () => {
    const pRoot = new TreeNode(1, new TreeNode(2), new TreeNode(1));
    const qRoot = new TreeNode(1, new TreeNode(1), new TreeNode(3));
    expect(isSameTree(pRoot, qRoot)).toBe(false);
});

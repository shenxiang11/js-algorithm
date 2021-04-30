/**
 * Initialize your data structure here.
 */
const MyStack = function() {
    this._queue1 = [];
    this._queue2 = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this._queue1.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while(this._queue1.length > 1) {
        this._queue2.push(this._queue1.shift());
    }
    [this._queue1, this._queue2] = [this._queue2, this._queue1];
    return this._queue2.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    while(this._queue1.length > 1) {
        this._queue2.push(this._queue1.shift());
    }
    return this._queue1[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this._queue1.length && !this._queue2.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

export default MyStack;

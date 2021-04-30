/**
 * Initialize your data structure here.
 */
const MyQueue = function() {
    this._stack1 = [];
    this._stack2 = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this._stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while (this._stack1.length > 1) {
        this._stack2.push(this._stack1.pop());
    }
    let res = this._stack1.pop();
    while(this._stack2.length) {
        this._stack1.push(this._stack2.pop());
    }
    return res;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while (this._stack1.length > 1) {
        this._stack2.push(this._stack1.pop());
    }
    return this._stack1[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this._stack1.length && !this._stack2.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

export default MyQueue;

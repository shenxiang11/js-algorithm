/**
 * initialize your data structure here.
 */
const MinStack = function() {
    this._stack = [];
    this._minStack = [];
    this._min = Infinity;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this._min = Math.min(val, this._min);
    this._minStack.push(this._min);
    this._stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this._stack.pop();
    this._minStack.pop();
    this._min = this._minStack[this._minStack.length - 1] ?? Infinity;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this._stack[this._stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this._minStack[this._minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

export default MinStack;

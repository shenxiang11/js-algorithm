import MinStack from './0155_min_stack';

test('MinStack:1', () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toBe(-3);
    minStack.pop();
    expect(minStack.top()).toBe(0);
    minStack.getMin();
    expect(minStack.getMin()).toBe(-2);
});

test('MinStack:2', () => {
    const minStack = new MinStack();
    minStack.push(2147483646);
    minStack.push(2147483646);
    minStack.push(2147483647);
    expect(minStack.top()).toBe(2147483647);
    minStack.pop();
    expect(minStack.getMin()).toBe(2147483646);
    minStack.pop();
    expect(minStack.getMin()).toBe(2147483646);
    minStack.pop();
    minStack.push(2147483647);
    expect(minStack.top()).toBe(2147483647);
    expect(minStack.getMin()).toBe(2147483647);
    minStack.push(-2147483648);
    expect(minStack.top()).toBe(-2147483648);
    expect(minStack.getMin()).toBe(-2147483648);
    minStack.pop();
    expect(minStack.getMin()).toBe(2147483647);
});

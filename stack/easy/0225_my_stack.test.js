import MyStack from './0225_my_stack';

test('MyStack:1', () => {
    const myStack = new MyStack();
    myStack.push(1);
    myStack.push(2);
    expect(myStack.top()).toBe(2);
    expect(myStack.pop()).toBe(2);
    expect(myStack.empty()).toBe(false);
    expect(myStack.pop()).toBe(1);
    expect(myStack.empty()).toBe(true);
});

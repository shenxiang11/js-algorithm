import MyQueue from "./0232_my_queue";

test('MyQueue:1', () => {
    const myQueue = new MyQueue();
    myQueue.push(1);
    myQueue.push(2);
    expect(myQueue.peek()).toBe(1);
    expect(myQueue.pop()).toBe(1);
    expect(myQueue.empty()).toBe(false);
    expect(myQueue.pop()).toBe(2);
    expect(myQueue.empty()).toBe(true);
});

test('MyQueue:2', () => {
    const myQueue = new MyQueue();
    myQueue.push(1);
    myQueue.push(2);
    myQueue.push(3);
    myQueue.push(4);
    expect(myQueue.pop()).toBe(1);
    myQueue.push(5);
    expect(myQueue.pop()).toBe(2);
    expect(myQueue.pop()).toBe(3);
    expect(myQueue.pop()).toBe(4);
    expect(myQueue.pop()).toBe(5);
});

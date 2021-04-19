export default class Stack {
    constructor(size) {
        this.arr = [];
        this.capacity = size;
        this.top = -1;
    }
    isFull() {
        return this.capacity === this.arr.length;
    }
    isEmpty() {
        return this.top === -1;
    }

    push(item) {
        if (this.isFull()) {
            return new Error('The stack is full');
        }
        this.top += 1;
        return this.arr.push(item);
    }
    pop() {
        if (this.isEmpty()) {
            return new Error('The stack is empty');
        }
        this.top -= 1;
        return this.arr.pop();
    }
    peek() {
        if (this.isEmpty()) {
            return new Error('The stack is empty');
        }
        return this.arr[this.arr.length - 1];
    }
}

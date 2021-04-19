import Stack from '@structures/stack';
const stack = new Stack(3);

// STACK
stack.push('dasd');
console.log(typeof stack.push('qwe'));
stack.push('qwe');
stack.push(stack.push(3));

stack.push(1);
console.log(typeof stack.push('qwe'));
stack.push(stack.push(3).message);

console.log(stack.peek());

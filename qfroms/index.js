// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.currentStack = new Stack();
        this.otherStack = new Stack();
    }
    peek(){
        return this.currentStack.peek();
    }
    remove(){
        return this.currentStack.pop();
    }
    add(l){
        while(this.currentStack.peek()){
            this.otherStack.push(this.currentStack.pop());
        }
        this.currentStack.push(l);
        while(this.otherStack.peek()){
            this.currentStack.push(this.otherStack.pop())
        }
    }



}

module.exports = Queue;

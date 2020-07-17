// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.data = []
    }
    add(l){
        this.data.push(l);
    }
    remove(l){
        if(this.data.length === 0) return undefined;
        let res = this.data[0];
        this.data= this.data.slice(1,this.data.length);
        return res;
    }
}

module.exports = Queue;

// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    if(this.data.length===0)return undefined;
    let l = this.data[this.data.length-1];
    this.data = this.data.slice(0,this.data.length-1);
    return l;
  }

  peek(){
    if(this.data.length === 0) return undefined;
    return this.data[this.data.length-1];
  }
}

module.exports = Queue;

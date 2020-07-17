// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let l = [list.head];
    let head= list.head;
    while(head.next!=null){
        head = head.next;
        if(l.includes(head))return true;
        l.push(head);

    }
    return false;
}

module.exports = circular;

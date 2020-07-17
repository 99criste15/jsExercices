// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent
const Node = require('./node');
function validate(node, min = null, max = null) {
    if(node === null) return true;
    if(min && node.data<min)return false
    if(max && node.data>max)return false
    let b1 = true;
    let b2 = true;
    if(node.left !==null){
        let newMax = max;
        if(node.data<node.left.data )return false;
        if((newMax && node.data<newMax) || newMax === null)newMax = node.data;
        b1= validate(node.left,min,newMax)
    }
    if(node.right !==null){

        let newMin = min;
        if(node.data>=node.right.data)return false;
        if((newMin && node.data>newMin) || newMin === null)newMin = node.data;
        b2 = validate(node.right,newMin,max)
    }
    return b1 && b2;

}
const n = new Node(10);
n.insert(5);
n.insert(15);
n.insert(0);
n.insert(20);

n.left.left.right = new Node(999);
validate(n);


module.exports = validate;

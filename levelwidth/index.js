// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let result =[1]
    let roots = [root]
    let ch = root.children;
    while(ch.length>0){
        result.push(childrenWidth(roots));
        roots = ch;
        ch = getChildrenArray(ch);
    }
    return result;
}

function childrenWidth(array){
    let sum = 0;
    array.forEach(x=> sum += x.children.length);
    return sum;
}
function getChildrenArray(arr){
    let children = [];
    arr.forEach(node => children = children.concat(node.children));
    return children;
}

module.exports = levelWidth;

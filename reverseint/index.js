// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let x=1;
    let f =n;
    if (n<0) {x=-1;f = n*(-1);}
    let nn = 0;
    while(f>0){
        nn *=10;
        nn += f%10;
        f= Math.floor(f/10);
    }
    return nn*x;

}


module.exports = reverseInt;

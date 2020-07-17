// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let rowL = n*2-1;
    let left=n;
    let right=n;
    for(let i=0;i<n;i++){
        let row='';
        for (let j=1;j<=rowL;j++){
            if(j>=left && j<=right)row += '#';
            else row += ' ';
        }
        console.log(row);
        left -= 1;
        right +=1;
    }
}

module.exports = pyramid;

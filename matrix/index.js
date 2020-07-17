// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let v=0;
    let h = 1;
    let row = 0;
    let column = 0;
    let result =[]
    for(let i=0;i<n;i++){
        result.push([]);
        for(let j=0; j<n;j++){
            result[i].push(0);
        }
    }
    for(let i=1;i<=n*n;i++){
        result[row][column] = i;
        if(h===1 && (column +1 === n || result[row][column+1] !== 0)){
            h=0;
            v=1;
        }
          if(h===-1 && (column -1 === -1 || result[row][column-1] !== 0)){
            h=0;
            v=-1;
        }
          if(v===1 && (row +1 === n || result[row+1][column] !== 0)){
            h=-1;
            v=0;
        } if(v===-1 && (row -1 === -1 || result[row-1][column] !== 0)){
            h=1;
            v=0;
        }
        row +=v;column+=h;
    }
    return result;
}

console.log(matrix(4));

module.exports = matrix;

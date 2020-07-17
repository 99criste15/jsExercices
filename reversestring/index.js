// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



function reverse(str) {
    let rt = str.split("");
    for(let i =0;i<rt.length/2;i++){
        let y = rt[i];
        rt[i] = rt[rt.length-1-i];
        rt[str.length-1-i] = y;
    }
    return rt.join("");
}



module.exports = reverse;

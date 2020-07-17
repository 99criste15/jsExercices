// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    return str.split(" ").map(x=>x.split("").slice(0,1)[0].toLocaleUpperCase()+x.split("").slice(1,x.length).
        join("").toLocaleLowerCase()).join(" ");
}

module.exports = capitalize;

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let a = stringA.toString().toLocaleLowerCase();
    let b = stringB.toString().toLocaleLowerCase();
    let dict = []
    for(let i=0;i<=25;i++){dict.push(0);}
    for(let i=0;i<a.length;i++){
        let dif =a.charCodeAt(i)-"a".charCodeAt(0);
        if(dif >= 0 ||dif<26)dict[dif]+=1;
    }
    for(let i=0;i<b.length;i++){
        let dif =b.charCodeAt(i)-"a".charCodeAt(0);
        if(dif >= 0 ||dif<26)dict[dif]-=1;
    }
    for(let it of dict){
        if (it !==0) return false;
    }
    return true;

}

module.exports = anagrams;

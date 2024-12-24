// Write a code to Remove all characters from string except alphabets
function removeNonAlphabets(input){
    return input.replace(/[^a-zA-z]/g,'');
}
let orignalString = "Hello, World..! 12321"
let cleanedString = removeNonAlphabets(orignalString);
console.log(cleanedString);

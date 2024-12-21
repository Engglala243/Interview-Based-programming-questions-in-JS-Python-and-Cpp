// Write code  to Calculate frequency of characters in a string
function calculateFrequency(str, count){
    const stringArray = str.split('').filter((char)=> char === count).length;;
    return stringArray;
}
const str = 'hello world';
const count = 'l'
console.log(calculateFrequency(str, count));




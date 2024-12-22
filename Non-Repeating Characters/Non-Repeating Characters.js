// Find non-repeating characters in a string
function findNonRepeatingCharacters(str){
    const charCount = {};
    const nonRepeatingChars = [];
    for(let char of str){
        charCount[char] = (charCount[char] || 0)+1;
    }
    for(let char of str){
        if(charCount[char] === 1){
            nonRepeatingChars.push(char);
        }
    }
    return nonRepeatingChars;
}
const str = 'swisos';
const result = findNonRepeatingCharacters(str);
console.log(result);

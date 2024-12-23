// Write a program to check whether a character is a vowel or consonant
function checkVowelorConsonant(char){
    char = char.toLowerCase();
    const vowels = "aeiou";
    if(vowels.includes(char)) return `${char} is a vowel.`
    else if (char >= 'a' && char <= 'z') return `${char} is a consonant.`;
    return `${char} is not a valid letter.`;
}
console.log(checkVowelorConsonant('A'));
console.log(checkVowelorConsonant('b'));
console.log(checkVowelorConsonant('1'));

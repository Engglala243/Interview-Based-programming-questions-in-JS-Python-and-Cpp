// Write code to check a String is palindrome or not?
let str = "nana";
const result = str.toString().split('').reverse().join('');
if(result === str) return console.log(`${str} is Palindrome`);
console.log(`${str} is not palindrome`);

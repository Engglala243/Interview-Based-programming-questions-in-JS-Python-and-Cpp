// Write a program to find the sum of Natural Numbers using Recursion.
function sumOfNaturalNum(n){
    if(n===0) return 0;
    return n+sumOfNaturalNum(n-1);
}
const number = 20;
const result = sumOfNaturalNum(number);
console.log(`The sum of the first ${number} natural number is ${result}`);

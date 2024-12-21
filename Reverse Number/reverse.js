// Write a code to reverse a number
function reverseNumber(num){
    let reversed = 0;
    while(num!=0){
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num/10);
    }
    return reversed;
}

let num = 1234;
console.log(reverseNumber(num));

let num1 = 4567
let reverse = num1.toString().split('').reverse().join('');
console.log(reverse);

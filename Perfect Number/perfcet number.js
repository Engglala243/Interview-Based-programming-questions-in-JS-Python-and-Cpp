// Write code of  Perfect number
function isPerfectNumber(number){
    if(number <= 0) return console.log(`${number} is not a perfect`);
    let sum = 0;
    let i = 1;
    while(i<=number/2){
        if(number % i === 0) sum += i;
        i++;
    }
    return sum === number;
}
let a = isPerfectNumber(6);
if(a == '0') return console.log(`Given number is not a perfect`);
console.log(`Given number is perfect`);



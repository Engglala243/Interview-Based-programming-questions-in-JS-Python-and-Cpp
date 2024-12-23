// Write the code to for Armstrong number
function isArmstrongNumber(num){
    let numStr = num.toString();
    let numDigits = numStr.length;
    let sum = 0;
    for(let digit of numStr){
        sum = sum + Math.pow(parseInt(digit), numDigits);
    }
    return sum === num;
}
let number = 1531;
if(isArmstrongNumber(number)){
    console.log(`${number} is an Armstrong number.`);
}else{
    console.log(`${number} is not an Armstrong number.`);
}
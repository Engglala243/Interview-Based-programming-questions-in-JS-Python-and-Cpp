// Write a program for Binary to Decimal to conversion.
function binaryTodecimalCon(binary){
    let decimal = 0;
    let base = 1;
    for(let i=binary.length-1; i>=0; i--){
        if(binary[i]==='1') decimal += base;
        base *= 2;
    }
    return decimal;
}
const binary = "1010";
const decimalNumber = binaryTodecimalCon(binary);
console.log(`The decimal equivalent of binary ${binary} is ${decimalNumber}`);

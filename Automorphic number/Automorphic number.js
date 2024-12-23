// Write a code to find an Automorphic number.
function isAutomorphic(number){
    const square = number * number;
    const numStr = number.toString();
    const squareStr = square.toString();

    return squareStr.endsWith(numStr)
}
const number = "11";
if(isAutomorphic(number)) {
    console.log(`${number} is an automorphic number.`); 
}else{
    console.log(`${number} is not an automorphic number.`);
}
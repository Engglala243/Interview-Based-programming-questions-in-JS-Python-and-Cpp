// Write a code to find the factorial of a number.
function factorial(n){
    if(n === 0 || n === 1) return 1;
    return n*factorial(n-1);
}
console.log(factorial(5));
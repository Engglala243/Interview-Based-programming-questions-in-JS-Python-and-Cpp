// Write the code to find the Fibonacci series upto the nth term.
function nthFibonacci(n){
    if(n <= 1){
        return n;
    }
    return nthFibonacci(n-1) + nthFibonacci(n-2);
}
let n = 5;
let result = nthFibonacci(n);
console.log(result);

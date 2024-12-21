// Write code of Greatest Common Divisor
function gcd(a, b){
    while(b !== 0){
        const temp = b;
        b = a%b;
        a = temp;
    }
    return a;
}
let a = 10;
let b = 20;
console.log(gcd(a, b));

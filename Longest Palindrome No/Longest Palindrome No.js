// Write a code to check for the longest palindrome in an array.
function isPalindrome(str){
    return str === str.split('').reverse().join('');
}
function longestPalindrome(arr){
    let longest = '';
    for(let str of arr){
        if(isPalindrome(str) && str.length > longest.length) longest = str;
    }
    return longest;
}
const str = ["racecar", "level", "world", "madam", "noon"];
const result = longestPalindrome(str);
console.log("The Longest palindrome is:",result);

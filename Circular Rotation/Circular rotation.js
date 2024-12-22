// Write a code to find circular rotation of an array by K positions.
function rotateArray(arr, k){
    k = k%arr.length;
    if(k<0) k += arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}
const array = [1,2,3,4,5,6];
const k = 4;
const rotatedArray = rotateArray(array, k);
console.log(rotatedArray);

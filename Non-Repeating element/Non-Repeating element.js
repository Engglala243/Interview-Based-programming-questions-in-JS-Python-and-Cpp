// Write a code to find non-repeating elements in an array.
function findNonRepeatingElement(arr){
    const elementCount = {};
    arr.forEach(element => {
        elementCount[element] = (elementCount[element] || 0) + 1;
    });
    const nonRepeatingElements = arr.filter(element => elementCount[element] === 1);
    return nonRepeatingElements;
}
const arr = [4,5,6,4,3,5,3,6,4,4,6,8,3,6,9,9,7,4,10,11];
const result = findNonRepeatingElement(arr);
console.log(result);


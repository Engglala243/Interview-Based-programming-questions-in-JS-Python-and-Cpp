// Write a code to Print the smallest element of the array
function findSmallestElement(arr){
    if(arr.length === 0){
        console.log("Array is empty");
        return;
    }
    let smallest = arr[0];
    for(let i = 1;i<arr.length;i++){
        if(arr[i]<smallest){
            smallest = arr[i];
        }
    }
    console.log("The smallest element is:",smallest);
}
const array = [34,15,88,2,9];
findSmallestElement(array)
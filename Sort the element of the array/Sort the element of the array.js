// Write a code to Sort the element of the array
let arr = [2,3,1,4,2,5,6,4,7,9,8]
arr.sort()
console.log(`Sorted array is ${arr}`);

// Write a code to Sort the element of the array without sort method
function bubbleSort(arr){
    let n = arr.length;
    let swapped;
    do{
        swapped = false;
        for(let i=0; i<n-1; i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
        n--;
    }while(swapped);
    return arr;
}
console.log("Without using sort method",bubbleSort(arr));

// Write a code to Count Inversion.
function getInvCount(arr){
    let inv_count = 0;
    for(let i = 0; i<arr.length -1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]>arr[j]) inv_count++;
        }
    }
    return inv_count;
}
let arr = [1, 20, 6, 4, 5,]
console.log("Number of inversion are",getInvCount(arr));

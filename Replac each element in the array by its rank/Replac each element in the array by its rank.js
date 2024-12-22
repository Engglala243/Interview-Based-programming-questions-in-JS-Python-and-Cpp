// Write a code to replace each element in an array by its rank in the array
function replaceWithRanks(arr){
    let indexedArray = arr.map((value, index) => ({
        value,
        index
    }));
    indexedArray.sort((a,b)=>a.value-b.value);
    let ranks = new Array(arr.lnght);
    indexedArray.forEach((item, rank) => {
        ranks[item.index] = rank + 1;
    });
    return ranks;
}
let arr = [40, 10, 21, 32];
let rankedArray = replaceWithRanks(arr);
console.log(rankedArray);

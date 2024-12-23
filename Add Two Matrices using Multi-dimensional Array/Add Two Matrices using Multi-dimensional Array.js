// Write a program to add Two Matrices using Multi-dimensional Array.
function addMatrices(matrixA, matrixB){
    let result = [];
    for(let i=0; i<matrixA.length; i++){
        result[i] = [];
        for(let j=0; j<matrixA[i].length; j++){
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }
    return result;
}
let matrixA =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let matrixB =[
    [9,8,7],
    [6,5,4],
    [3,2,1]
];
let resultMatix = addMatrices(matrixA, matrixB);
console.log("Resultant Matrix:");
resultMatix.forEach(row => 
    console.log(row)
)

function generateRandomNumber(n){
    let arr = new Array(n);
    for(let i=0; i<n; i++){
        arr[i] = Math.floor(Math.random() * 10);
    }

    return arr;
}


//this function return the sum of array
function sum(arr){
    return arr.reduce((sum, curr) => sum + curr, 0);
}

export {generateRandomNumber, sum};
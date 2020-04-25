// 1. Given an array. Write a recursive function that removes the first element and returns the given array. 
// (without using arr.unshift(),assign second element to first, third element to second...)
function solution1(arr=[], i = arr.length - 1){
    if(i < 0){
        arr.pop();
        return arr;
    }
    arr[arr.length - i-1] = arr[arr.length - i];
    i--;
    return solution1(arr, i)
}


// 2. Given an object. Invert it (keys become values and values become keys). 
// If there is more than key for that given value create an array.

// 1. Write a recursive function to determine whether all digits of the number are odd or not.
function solution1(num){
    if(num >= -9 && num <=9){
        return num % 2 === 0 ? false : true;
    } else {
        return (num % 10) % 2 === 0 ? false : solution1(Math.trunc(num/10));
    }
}


/* 2.  Given an array of numbers. Write a recursive function to find its minimal positive element. 
(if such element does not exist, return -1).*/
function solution2(arr) {
var counter = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = +Infinity;
            counter++
        }
        if(counter === arr.length){
            return -1;
        }
    }
    if (arr.length < 2) {
        return arr[0];
    } else {
        let min = Math.min(arr.shift(), solution2(arr));
        return min;
    } 
}


// 3. Write a recursive function which receives  a number as arguments and returns the fibonacci sequence as array.
function solution3(limit, store = [0, 1]) {
    if (limit <= 0){
        return [];
    } else if (limit === 1) {
        return [1];      
    }
    if(store.length === limit){
        return store;
    }
    store.push(store[store.length-1] + store[store.length-2]);
    return meow(limit,store);
}

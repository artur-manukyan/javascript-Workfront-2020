/***
 *                      .___       
 *      ____   ____   __| _/ ____  
 *    _/ ___\ /  _ \ / __ |_/ __ \ 
 *    \  \___(  <_> ) /_/ |\  ___/ 
 *     \___  >\____/\____ | \___  >
 *         \/            \/     \/ 
 */
 
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
function min(num1, num2){
    if(num1 < 0 && num2 < 0){
        return -1;
    } else if (num1 < 0){
        return num2;
    } else if (num2 < 0){
        return num1;
    } else if (num1 < num2){
        return num1;
    } else if (num2 < num1){
        return num2;
    }
}
function solution2(arr){
    /*if (arr.length === 1 && arr[0] > 0) {
        return arr[0];
    } else if (arr.length === 1 && arr[0] < 0){
        return -1;
    }*/ 
    return min(arr.shift(),solution2(arr))
}

// Version 2.
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
function solution3(limit, store = [1, 1]) {
    if (limit <= 0){
        return [];
    } else if (limit === 1) {
        return [1];      
    }
    if(store.length === limit){
        return store;
    }
    store.push(store[store.length-1] + store[store.length-2]);
    return solution3(limit,store);
}


// 4. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).
function concat(array1, array2){
debugger;
    while(array2.length > 0){
        array1.push(array2[0]); 
        array2.shift();
    }
return array1;
}
function solution4(array){
debugger;
    let store = [];
    for (let i = 0; i <= array.length-1; i++){
        if (typeof array[i] !== 'object'){
            store.push(array[i]);
        } else {
            store = concat(store,solution4(array[i]));
        }
    }
return store;
}


/*5. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit 
find the sum of digits of that number. Repeat that process if needed and return the result.*/
function sumOfDigits(digits){
    sum = 0;
    while(digits > 0){
        sum += digits % 10;
        digits = Math.floor(digits/10);
    }
return sum;
}
function solution5(num){
    if (!Math.trunc(num/10)){
        return num;
    } else {
        return solution5(sumOfDigits(num));  
    }
}

// THANKS FOR YOUR TIME DEDICATED !

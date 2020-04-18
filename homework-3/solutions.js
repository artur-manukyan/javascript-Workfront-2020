// 1. Write a recursive function to determine whether all digits of the number are odd or not.
function solution1(num){
    if(num >= -9 && num <=9){
        return num % 2 === 0 ? false : true;
    } else {
        return (num % 10) % 2 === 0 ? false : solution1(Math.trunc(num/10));
    }
}


// 2.  Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1).

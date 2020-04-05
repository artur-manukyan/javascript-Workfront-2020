// 1. Given a number. Print “odd” if the number is odd and “even” if it’s even.

let input = prompt('Input');
let givenNum = +input;
givenNum % 2 === 0 ? console.log('Even') : console.log('Odd');


// 2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

let input1 = prompt('Input 1');
let input2 = prompt('Input 2');
let givenNum1 = +input1;
let givenNum2 = +input2;
givenNum1 % givenNum2 === 0 || givenNum2 % givenNum1 === 0 ? console.log(1) : console.log(0);


/* 3. Given two variables, which are the angles of a triangle. Find the third angle of the
triangle. (Sum of the angles of a triangle equals 180 degrees).*/

let input1 = prompt('Input 1');
let input2 = prompt('Input 2');
let givenNum1 = +input1;
let givenNum2 = +input2;
let result = 180 - (givenNum1 + givenNum2);
console.log(result);


// 4. Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).

let input = prompt('Input');
let givenNum = +input;
let secondPart = String(input * 2);
let thirdPart = String(input * 3);
let givenNumString = String(givenNum);
let resultString = givenNumString + secondPart + thirdPart;
let resultNum = +resultString;
console.log(resultNum);


/*5. Given a positive integer. Bring the last digit of the number to the beginning. Print the new
number. If the last digit of the inserted number is 0, number remains the same.*/

let input = prompt('Input');
let givenNum = +input;
if (givenNum < 0) {
    console.log('Please input a positive integer.');
}
else {
    if (givenNum % 10 === 0 || givenNum >=1 && givenNum <=9) {
        console.log(givenNum);
    }
    else {
        let lastDigit = givenNum % 10;
        let prefix = Math.floor(givenNum / 10);
        let lastDigitString = String(lastDigit);
        let prefixString = String(prefix);
        let resultString = lastDigitString + prefixString;
        let resultNum = +resultString
        console.log(resultNum);
    }
}


/* 6. Given five numbers as input. Calculate and print the average of the numbers(without
using arrays).*/




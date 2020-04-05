// 2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

let input1 = prompt('Input 1');
let input2 = prompt('Input 2');
let givenNum1 = +input1;
let givenNum2 = +input2;
givenNum1 % givenNum2 === 0 || givenNum2 % givenNum1 === 0 ? console.log(1) : console.log(0);

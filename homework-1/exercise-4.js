// 4. Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).

let input = prompt('Input');
let givenNum = +input;
let secondPart = String(input * 2);
let thirdPart = String(input * 3);
let givenNumString = String(givenNum);
let resultString = givenNumString + secondPart + thirdPart;
let resultNum = +resultString;
console.log(resultNum);

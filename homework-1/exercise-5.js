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

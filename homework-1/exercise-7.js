// Unfinished
// 7. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

let input = prompt('Input');
let givenNum = +input;
let outputPrefix = `${givenNum} is a multiple of `

if (givenNum % 3 === 0) {
    console.log(outputPrefix + '3.');
    if (givenNum % 3 === 0 && givenNum % 5 === 0){
    console.log(outputPrefix + '3 and 5.');
        }
    if (givenNum % 3 === 0 && givenNum % 7 === 0){
    console.log(outputPrefix + '3 and 7.');
        }
    if (givenNum % 3 === 0 && givenNum % 5 === 0 && givenNum % 7 === 0){
    console.log(outputPrefix + '3, 5 or 7.');
        }
    }

else if (givenNum % 5 === 0) {
    console.log(outputPrefix + '5.');
    if (givenNum % 5 === 0 && givenNum % 7 === 0){
    console.log(outputPrefix + '3 and 5.');
        }
    }

else if (givenNum % 7 === 0) {
    console.log(outputPrefix + '7.');
    }

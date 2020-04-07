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

//second option --  algorythm - while,rresult = 0, num %10, result * last digit, num/10 floor write if there is a time


/* 6. Given five numbers as input. Calculate and print the average of the numbers(without
using arrays).*/

let input1 = prompt('Input 1');
let input2 = prompt('Input 2');
let input3 = prompt('Input 3');
let input4 = prompt('Input 4');
let input5 = prompt('Input 5');
let givenNum1 = +input1;
let givenNum2 = +input2;
let givenNum3 = +input3;
let givenNum4 = +input4;
let givenNum5 = +input5;
let result = (givenNum1 + givenNum2 + givenNum3 + givenNum4 + givenNum5) / 5;
console.log(result);


// 7. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

let input = prompt('Input');
let givenNum = +input;
let outputPrefix = `${givenNum} is a multiple of `

if (givenNum % 3 === 0 && givenNum % 5 === 0 && givenNum % 7 === 0){
    console.log(outputPrefix + '3, 5 and 7.');
        }
else if (givenNum % 3 === 0 && givenNum % 5 === 0){
    console.log(outputPrefix + '3 and 5.');
        }
else if (givenNum % 3 === 0 && givenNum % 7 === 0){
    console.log(outputPrefix + '3 and 7.');
        }
else if (givenNum % 5 === 0 && givenNum % 7 === 0){
    console.log(outputPrefix + '5 and 7.');
        }
else if (givenNum % 7 === 0){
    console.log(outputPrefix + '7.');
        }
else if (givenNum % 5 === 0){
    console.log(outputPrefix + '5.');
        }
else if (givenNum % 3 === 0){
    console.log(outputPrefix + '3.');
        }
else {
    console.log(`${givenNum} is not a multiple of 3, 5 or 7.`)        
}


/*8. Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1
year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18
years and more ). Also check that age in months is between 1 and 12.*/

let age = prompt('Input age');
let givenAge = +age;
let unit = prompt('Input unit: enter either "months" or "years"');

if (unit === 'months' && age >= 1 && age <=12) {
    console.log('baby') ;
}

if (unit === 'years' && age >= 1 && age <=2) {
    console.log('toddler');
} else if (unit === 'years' && age >= 3 && age <=12) {
    console.log('child');
} else if (unit === 'years' && age >= 13 && age <=17) {
    console.log('teenager');
} else if (unit === 'years' && age >= 18) {
    console.log('adult');
}

/////////// Option 2. Using Switch

let age = prompt('Input age');
let givenAge = +age;
let unit = prompt('Input unit: enter either "months" or "years"');

switch (unit) {
    case 'months':
        if (age >= 1 && age <=12) {
    console.log('baby');
        }
        break;
    
    case 'years':
        if (age >= 1 && age <=2) {
            console.log('toddler');
        } else if (age >= 3 && age <=12) {
            console.log('child');
        } else if (age >= 13 && age <=17) {
            console.log('teenager');
        } else if (age >= 18) {
            console.log('adult');
        }
        break;  
}


//9. Given three numbers. Sort them by the ascending order.

let input1 = prompt('Input 1');
let input2 = prompt('Input 2');
let input3 = prompt('Input 3');
let givenNum1 = +input1;
let givenNum2 = +input2;
let givenNum3 = +input3;
let min = givenNum1;
let mid = 0;
let max = 0;

if (givenNum1 <= givenNum2){
    min = givenNum1;
} 
if (givenNum2 <= min){
    min = givenNum2;
} 
if (givenNum3 <= min){
    min = givenNum3;
}
if (givenNum1 >= givenNum2){
    max = givenNum1;
} 
if (givenNum2 >= max){
    max = givenNum2;
} 
if (givenNum3 >= max){
    max = givenNum3;
}
if (max === givenNum1 && min === givenNum3){
    mid = givenNum2;
} else if (max === givenNum1 && min === givenNum2){
    mid = givenNum3;
}
if (max === givenNum2 && min === givenNum3){
    mid = givenNum1;
} else if (max === givenNum2 && min === givenNum1){
    mid = givenNum3;
}
if (max ===givenNum3 && min === givenNum1){
    mid = givenNum2;
} else if (max === givenNum3 && min === givenNum2){
    mid = givenNum1;
}
console.log(min,mid,max);

////////// Option 2. This solution doesn't work correctly with negative numbers and 0 combinations.
let input1 = prompt('Input 1');
let input2 = prompt('Input 2');
let input3 = prompt('Input 3');
let givenNum1 = +input1;
let givenNum2 = +input2;
let givenNum3 = +input3;

// First one is the biggest one. Compare the other two.
if (givenNum1 >= givenNum2 + givenNum3 && givenNum2 >= givenNum3){
    console.log (givenNum3, givenNum2, givenNum1 );} 

if (givenNum1 >= givenNum2 + givenNum3 && givenNum3 >= givenNum2){
    console.log (givenNum2, givenNum3, givenNum1 );} 

//Second one is the biggest one.Compare the other two.
if (givenNum2 >= givenNum1 + givenNum3 && givenNum1 >= givenNum3){
    console.log (givenNum3, givenNum1, givenNum2);} 

if (givenNum2 >= givenNum1 + givenNum3 && givenNum3 >= givenNum1){
    console.log (givenNum1 ,givenNum3,givenNum2);} 

//Third one is the bigges one. Compare the other two.
if (givenNum3 >= givenNum1 + givenNum2 && givenNum2 >= givenNum1){
    console.log (givenNum1 ,givenNum2,givenNum3);} 

if (givenNum3 >= givenNum1 + givenNum2 && givenNum1 >= givenNum2){
    console.log (givenNum2,givenNum1 ,givenNum3);} 

/***
 *                      .___       
 *      ____   ____   __| _/ ____  
 *    _/ ___\ /  _ \ / __ |_/ __ \ 
 *    \  \___(  <_> ) /_/ |\  ___/ 
 *     \___  >\____/\____ | \___  >
 *         \/            \/     \/ 
 */

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

// Option 1.
var num = +prompt('Input')
var temp = num % 10;
var count = 0;
var backup = num;

if (num < 0){
    console.log('Please input a positive integer.');
}

if (num % 10 === 0){
    console.log(num)
} else {
    while(backup > 0){
    backup = Math.floor(backup/10);
            count++;
    }
    num = Math.floor(num/10);

    var lastToFront = (temp * Math.pow(10,count-1))
    var result = num + lastToFront;
    console.log(result);
}

// Option 2. Using Strings
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

// Option 2.
var num = +prompt('Input');
var prefix = `${num} is a multiple of `;

if (num % 105 === 0){
    console.log(prefix + '3, 5 and 7.”')
} else if (num % 35 === 0){
    console.log(prefix + '5 and 7.')
} else if (num % 21){
    console.log(prefix + '3 and 7.')
} else if (num % 15){
    console.log(prefix + '3 and 5.')
} else if (num % 7 === 0){
    console.log(prefix + '7.')
} else if (num % 5 === 0){
    console.log(prefix + '5.')
} else if (num % 3 === 0){
    console.log(prefix + '3.')
} else {
    console.log(`${num} is not a multiple of 3, 5 or 7.`)
}

// Option 3.
function multiple(number){
    let result = '';
    let counter = 0;
    for (let i = 3; i < 8; i = i + 2)
        if (number % i === 0){
            counter++;
            
            switch(counter){
                case 3:
                    result = "3, 5 and 7.";
                    break;
                case 2:
                    result = result + ' and ' + i;
                    break;
                default:
                    result =     result + i;
                    break;
            }
        }
    if (counter === 0) {
    console.log(`${number} is not a multiple of 3, 5 or 7.`);
    return;
    }
    console.log(`${number} is a multiple of ${result}`);
}

// Option 4.
isMultiple = (number) => {
    debugger;
    let message = `${number} is not a multiple of 3, 5 and 7.`;
    let text = '';
    let counter = 0;

    if ((number % 3 === 0)) {
        text += 3;
        counter++;
    }
    if ((number % 5 === 0)) {
        text += text ? ',5' : '5';
        counter++
    }
    if ((number % 7 ===0)) {
        text += text ? counter > 1 ? 'and 7' : ',7' : '7';
    }
    message = text ? `${number} is a multiple of ${text}` : message;
    return message;
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

// Option 2.
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

// Best Option
function sortNumbers(a, b, c){
    if (a > b){
        let t = b;
        b = a;
        a = t;
    }
    if (a > c){
        let t = c;
        c = a;
        a = t;
    }
    if (b > c){
        let t = b;
        b = c;
        c = t;
    }     
    return `${a}, ${b}, ${c}`
}

// Option 2.
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

// Option 3. This solution doesn't work correctly with negative numbers and 0 combinations.
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


/*10. Percentage marks obtained by a student in three exams are to be entered to a
computer. An indication of Pass or Fail is given out after the three marks are entered.
The criteria for passing are as follows:
a. A student passes if all three examinations are passed.
b. Additionally a student may pass if only one subject is failed but the overall
average is greater than or equal to 50.
The pass mark for an individual subject is 40.*/

var input1 = prompt('Input 1');
var input2 = prompt('Input 2');
var input3 = prompt('Input 3');
var exam1score = +input1;
var exam2score = +input2;
var exam3score = +input3;
var averageScore = (exam1score + exam2score + exam3score) / 3;
var exam1pass = false;
var exam2pass = false;
var exam3pass = false;
var allpass = false;
var onefail = false;

if (exam1score >= 40){
    exam1pass = true;
}

if (exam2score >= 40){
    exam2pass = true;
}

if (exam3score >= 40){
    exam3pass = true;
}

if (exam1pass === true && exam2pass === true && exam3pass === true){
    allpass = true;
} else if (exam1pass === false && exam2pass === true  && exam3pass === true ||
           exam1pass === true  && exam2pass === false && exam3pass === true ||
           exam1pass === true  && exam2pass === true  && exam3pass === false){
    onefail = true;
}

if (allpass === true){
    console.log('Passed');
} else if (onefail === true && averageScore >= 50){
    console.log('Passed')
} else {
    console.log('Not Passed')
}


/*11. Find the sign of product of three numbers without multiplication operator. Display the
specified sign.*/

let input1 = prompt('Input 1');
let input2 = prompt('Input 2');
let input3 = prompt('Input 3');
let givenNum1 = +input1;
let givenNum2 = +input2;
let givenNum3 = +input3;

if (givenNum1 == 0 || givenNum2 == 0 || givenNum3 == 0) {
  console.log("unsigned");
}

else if (givenNum1 > 0 && givenNum2 > 0 && givenNum3 > 0) {
  console.log( "+");
  }
else if (givenNum1 < 0 && givenNum2 < 0 && givenNum3 > 0) {
  console.log("+");
  }
else if (givenNum1 < 0 && givenNum3 < 0 && givenNum2 > 0) {
  console.log ("+");
  }
else if (givenNum3 < 0 && givenNum2 < 0 && givenNum1 > 0) {
  console.log ("+");
}
else {
  console.log("-");
}

// Option 2.
function findSign(num1, num2, num3){
    let counter = 0;
    debugger;
    if (num1 === 0 || num2 === 0 || num3 === 0){
        console.log('unsigned');
        return;
    }
    num1 < 0 ? counter++ : counter;
    num2 < 0 ? counter++ : counter;
    num3 < 0 ? counter++ : counter;

    return counter % 2 === 0 ? console.log('+') : console.log('-');
}

/*12. Input three numbers a, b, c respectively, where a is a non zero number and write a
program to solve quadratic equations: . (Hint: use Math.pow or Math.sqrt).*/

let input1 = prompt('Input 1');
let input2 = prompt('Input 2');
let input3 = prompt('Input 3');
let a = +input1;
let b = +input2;
let c = +input3;

let D = Math.pow(b,2) - (4*a*c);
let x1 = (-b + Math.sqrt(D)) / (2*a);
let x2 =(-b - Math.sqrt(D)) / (2*a);

if (a === 0){
    console.log('Enter a valid const.');
} else if (D > 0) {
    console.log(`Solutions are ${x1} and ${x2}`);
} else if (D === 0){
    console.log(-b / (2*a));
} else if (D < 0){
    console.log('Solution does not exist')
}


/*13. Given the following code rewrite it using only two if operators. (Hint: use logical
operators).*/

var n = +prompt();

var i = 0;
var j = 0;

if (n % 2 === 0 && n !== 0){
        i += 1;    
}

if  (n % 3 === 0 && n % 10 === 1){
    j += 1;
}


// 14. Insert a digit and a number. Check whether the digits contains in the number or not.

let digit = +prompt('digit');
let number = +prompt('number');
debugger;
while (number > 0){
    var lastDigit = number % 10;
    if (lastDigit === digit){
        console.log('Yes');
        break;
    } else {
          number = Math.floor(number/10);  
      }

}

if (number === 0){
    console.log('No');
}


// 15. Enter a number. Reverse its first and last digits. Print the new number.

var num = +prompt('Input')
var temp = num % 10;
var count = 0;
var backup = num;

while(backup > 0) {
    backup = Math.floor(backup/10);
            count++; 
}
num = Math.floor(num/10);

var lastToFront = (temp * Math.pow(10,count-1));
var middle = (num % Math.pow(10,count-2) )*10;
var frontToLast = Math.floor((num/Math.pow(10,count-2))); 

var result = (lastToFront + middle + frontToLast);
console.log(result);


// 16. aaa

// ¯\_(ツ)_/¯


/*17. Write a program which will compute the area of a rectangular or a triangle after
prompting the user to type the name of the figure name. Also check that entered
numbers are positive.
For the triangle entered numbers are height and and base.*/

var figure =  prompt('triangle | rectangle');

if (figure === 'triangle'){
    var base = +prompt('base');
    var triangleHeight = +prompt('height')
} else if (figure === 'rectangle'){
    var width = +prompt('width');
    var rectangleHeight = +prompt('height')
       }

switch(figure){
    case 'triangle':
        if (base <= 0 || triangleHeight <= 0){
            console.log('Please enter only positives');
        } else {
            console.log(`Square of the triangle is ${(base * triangleHeight)/2}`);
          }
        break;

    case 'rectangle':
        if (width <= 0 || rectangleHeight <= 0){
            console.log('Please enter only positives');
        } else {
            console.log(`Square of the rectangle is ${(width * rectangleHeight)}`);
          }
        break;
}    


// 18. (***) Enter a number. Find the difference between its biggest and smallest digits.
     
var num = +prompt('Input');
var numForMax = num;
var min = num % 10;
var max = num % 10;

while (num > 0){
    lastDigit = num % 10;
    if (lastDigit <= min){
        min = lastDigit;
    }
    num = Math.floor(num/10)
}

while (numForMax > 0){
    lastDigitForMax = numForMax % 10;
    if (lastDigitForMax >= max){
        max = lastDigitForMax;
    }
    numForMax = Math.floor(numForMax/10)
}

console.log(max - min);

// Optimized version.

var num = +prompt('Input');
var min = num % 10;
var max = num % 10;

while (num > 0){
    lastDigit = num % 10;
    lastDigitForMax = num % 10;
    if (lastDigit <= min){
        min = lastDigit;
    }
    
    if (lastDigitForMax >= max){
        max = lastDigitForMax;
    }
    num = Math.floor(num/10)
}

console.log(max - min);

// THANKS FOR YOUR TIME DEDICATED !

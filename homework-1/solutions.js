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

// Option 2. Using Switch

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

//Half solution 2...
let input1 = prompt('Input 1');
let input2 = prompt('Input 2');
let input3 = prompt('Input 3');
let givenNum1 = +input1;
let givenNum2 = +input2;
let givenNum3 = +input3;

// First one is the biggest one. (givenNum1 >= givenNum2 + givenNum3)
if (givenNum1 >= givenNum2 + givenNum3 && givenNum2 >= givenNum3){
    console.log (givenNum3, givenNum2, givenNum1 );} 

if (givenNum1 >= givenNum2 + givenNum3 && givenNum3 >= givenNum2){
    console.log (givenNum2, givenNum3, givenNum1 );} 

//////////////////////////////////////////////////////////////////
//Second one is the biggest one. (givenNum2 >= givenNum1 + givenNum3)

if (givenNum2 >= givenNum1 + givenNum3 && givenNum1 >= givenNum3){
    console.log (givenNum3, givenNum1, givenNum2);} 

if (givenNum2 >= givenNum1 + givenNum3 && givenNum3 >= givenNum1){
    console.log (givenNum1 ,givenNum3,givenNum2);} 

//////////////////////////////////////////////////////////////////
//Third one is the bigges one. (givenNum3 >= givenNum1 + givenNum2)

if (givenNum3 >= givenNum1 + givenNum2 && givenNum2 >= givenNum1){
    console.log (givenNum1 ,givenNum2,givenNum3);} 

if (givenNum3 >= givenNum1 + givenNum2 && givenNum1 >= givenNum2){
    console.log (givenNum2,givenNum1 ,givenNum3);} 

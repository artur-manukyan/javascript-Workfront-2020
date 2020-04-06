/*8. Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1
year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18
years and more ). Also check that age in months is between 1 and 12.*/

let age = prompt('Input age');
let givenAge = +age;
let unit = prompt('Input unit: enter either "months" or "years"');
console.log(givenAge, unit);

if (unit === 'months' && age >= 1 && age <=12) {
    console.log('baby') ;
}

if (unit === 'years' && age >= 1 && age <=2) {
    console.log('toddler');
} else if (unit === 'years' && age >= 3 && age <=12) {
    console.log('child');
} else if (unit === 'years' && age >= 13 && age <=17) {
    console.log('teenager');
} else if (unit === 'years' && age >= 8) {
    console.log('adult');
}

// Option 2.


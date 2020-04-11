// 1. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

function isPrime(num){ 
    counter = 0;
    for(i = num; i > 0; i--){
        num % i === 0 ? counter++ : counter;
    }
    return counter > 2 ? 'No' : 'Yes'
}

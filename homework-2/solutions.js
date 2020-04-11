// 1. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.
function isPrime(num){ 
    counter = 0;
    for(i = num; i > 0; i--){
        num % i === 0 ? counter++ : counter;
    }
    return counter > 2 ? 'No' : 'Yes'
}


// 2. Given a number n ( n>= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)
function fib_n(position){
    fibArray = [0, 1]
    for (let i = 1; true; i++){
        if (position === 0){return 0;}
        else{
            fibArray.push(fibArray[i] + fibArray[i-1])
            if(i === position){return fibArray[i]}
        }
    }
}


// 3. Given a number n( n> 0 ). Print Fibonacci series up to n.
function fib_untill_n(threshold){
    fibArray = [0, 1]
    for (let i = 1; true; i++){
        if (threshold === 0 || threshold === 1){return 0;}
        else{
            fibArray.push(fibArray[i] + fibArray[i-1])
            if(fibArray[i+1] < threshold){continue;}
            fibArray.pop();
            return fibArray;
        }
    }
}


/* 4. Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum, 
print the quotient, otherwise print the remainder.*/
function div(num){
    if (num === 0){return 'Cannot Calculate'}
    let sum = 0;
    let prod = 1;
    while(num > 0){
        sum += num % 10;
        prod *= num % 10;
        num = Math.floor(num/10);
    }
return prod % sum === 0 ? `Quotient is ${prod/sum}` : `Remainder is ${prod % sum}`
}

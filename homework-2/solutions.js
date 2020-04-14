// 1. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.
// Version Optimized.
function solution1(num){ 
    counter = 0;
    for(i = num; i > 0; i--){
        num % i === 0 ? counter++ : counter;
        if (counter>2){ 
            return 'No'
        }
   
    }
    return 'Yes'
}

// Version 2.
function solution1(num){ 
    counter = 0;
    for(i = num; i > 0; i--){
        num % i === 0 ? counter++ : counter;
    }
    return counter > 2 ? 'No' : 'Yes'
}


// 2. Given a number n ( n>= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)
function solution2(position){
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
function solution3(threshold){
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
function solution4(num){
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


/* 5. Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced numbers by the given num length over the specified 
interval (from a to b).*/
function solution5(start, end, len){
    let array = new Array(len);
    let step = (end - start) / (len - 1);
    if(len === 1){
        array[0] = start;
        return array;
    }
    array[0] = start;
    array[array.length-1] = end;
    for (let i = 0; i < len-1; i++){
        array[i + 1] = +(array[i] + step).toPrecision(2);
    }
    return array;
}


// 6. Given an array of numbers. Find the index of the second maximum element.
// Version Optimized.
function solution6(list){
    let max = list[0];
    for (let i = 0; i < list.length-1; i++){
            if(list[i+1] > max){
                max = list[i+1]
            }
        }
    list[list.indexOf(max)] = undefined;    
    max = list[0]
    for (let i = 0; i < list.length-1; i++){
            if(list[i+1] > max){
                max = list[i+1]
            }
        }
return list.indexOf(max);
}

// Version 2.
function solution6(list){
    let backup = [];
    for(let i = 0; i < list.length; i++){
        backup[i] = list[i]
    }
    let min = list[0];
    while (list.length > 2){
        for (let i = 0; i < list.length; i++){
            if(list[i+1] < min){
                min = list[i+1]
            }
        }
    list.splice(list.indexOf(min),1);
    min = list[0];
    }
    if(list[0] > list[1]){
        list[0] = list[1];
    }
return backup.indexOf(list[0]);
}


/* 7. Given an array of numbers, padding amount and repeat count. Pad the array in the following way: 
the padding amount specifies how many elements should be taken from the array edges, the repeat amount 
specifies how many times the pad should be repeated. Also, you should check that  padding amount <= length of array.*/
function solution7(list, pad, rep){
    if (pad > list.length){
        return 'Invalid padding amount'
    } 
    let backup = [];
    for (let i = 0; i < list.length; i++){
        backup[i] = list[i];
    }
    while(rep > 0){
        for (let i = pad - 1; i >= 0; i--){
            list.unshift(backup[i]);  
        }
        for (let i = backup.length-pad; i < backup.length; i++){
            list.push(backup[i]);    
        }
        rep--
    }
return list
}

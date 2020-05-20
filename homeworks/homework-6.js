// 1. Given an array. Determine whether it consists only from unique elements or not.
function solution1(givenArray){
    let setFromArray = new Set(givenArray);
    return givenArray.length === setFromArray.size?
            'unique elements':
            'there are duplicates';
}


// 2. Given an array of numbers. Find the sum of numbers’ quadratic which are even.
function solution2(givenArray){
    let quadraticEvensSum = givenArray.reduce((accumulator, currentValue) => {
        return !(((currentValue)**2) % 2) ? accumulator + currentValue : accumulator    
    }, 0)
    return quadraticEvensSum;
}

// 1. Given an array. Determine whether it consists only from unique elements or not.
function solution1(givenArray){
    let setFromArray = new Set(givenArray);
    return givenArray.length === setFromArray.size?
            'unique elements':
            'there are duplicates';
}

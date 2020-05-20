// 1. Given an array. Determine whether it consists only from unique elements or not.
function solution1(givenArray){
    let setFromArray = new Set(givenArray);
    return givenArray.length === setFromArray.size ? true : false;
}


// 2. Given an array of numbers. Find the sum of numbers’ quadratic which are even.
function solution2(givenArray){
    let quadraticEvensSum = givenArray.reduce((accumulator, currentValue) => {
        return !(((currentValue)**2) % 2) ? accumulator + currentValue : accumulator    
    }, 0)
    return quadraticEvensSum;
}


// 3. Check whether string is palindrome, or not.
function solution3(givenString){
    let lowered = givenString.split(' ').join('').toLowerCase();
    let reversed = lowered.split('').reverse().join('');
    return lowered === reversed ? true : false;
}


// 4. Given a word and a list of possible anagrams, select the correct sublist.
function solution4(givenWord, givenList){
    sortString = str => {
    return str.toLowerCase().split('').sort().join('')
    }
    let sortedWord = sortString(givenWord);
    let anagrams = givenList.reduce((acc, item)=>{
        sortedWord === sortString(item) && acc.push(item)
        return acc;
    },[]);
return anagrams;    
}

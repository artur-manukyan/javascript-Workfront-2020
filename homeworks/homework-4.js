/***
 *                      .___       
 *      ____   ____   __| _/ ____  
 *    _/ ___\ /  _ \ / __ |_/ __ \ 
 *    \  \___(  <_> ) /_/ |\  ___/ 
 *     \___  >\____/\____ | \___  >
 *         \/            \/     \/ 
 */
 
 // 1. Given an array. Write a recursive function that removes the first element and returns the given array. 
// (without using arr.unshift(),assign second element to first, third element to second...)
function solution1(arr=[], i = arr.length - 1){
    if(i < 0){
        arr.pop();
        return arr;
    }
    arr[arr.length - i-1] = arr[arr.length - i];
    i--;
    return solution1(arr, i)
}


// 2. Given an object. Invert it (keys become values and values become keys). 
// If there is more than key for that given value create an array.
function solution2(obj) {
    let entries = Object.entries(obj);
    entries.forEach(entry => {
    [entry[0], entry[1]] = [entry[1], entry[0]];
    });
    for (let i = 0; i < entries.length; i++) {
        for (let j = i+1; j < entries.length; j++) {
            if (entries[i][0] === entries[j][0]) {
                entries[i].push(entries[j][1]);
                entries[j].push('remove this');
            }
        }
    }
    let uniques = []
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].indexOf('remove this') === -1) {
            uniques.push(entries[i]);
        }
    }
    let resObj = {}
    for (let i = 0; i < uniques.length; i++) {
        if (uniques[i].length > 2) {
            resObj[uniques[i][0]] = uniques[i].slice([1]);
        } else {
            resObj[uniques[i][0]] = uniques[i][1];
        }
    }
return resObj;
}


/*3. Given the list of the following readers:
 [
 { book: "Catcher in the Rye", readStatus: true, percent: 40},
 { book: "Animal Farm", readStatus: true, percent: 20},
 { book: "Solaris", readStatus: false, percent: 90 },
 { book: "The Fall", readStatus: true, percent: 50 },
 { book: "White Nights", readStatus: false, percent: 60 } ,
 { book: "After Dark", readStatus: true, percent: 70 }
 ];
 Output the books sorted by the percent in descending order which readStatus is true.
*/
let sortedBooks = books.sort(function (a, b) {
    if (a.readStatus < b.readStatus) {return 1}
    if (a.readStatus > b.readStatus) {return -1}    
    if (a.percent < b.percent) {return 1}
    if (a.percent > b.percent) {return -1}
});

// In case if only 'true' status books should be displayed:
let filteredBooks = sortedBooks.filter(function(book){
    return book.readStatus === true;
});


// 4. Given an array and a number N.  Write a recursive function that rotates an array N places to the left. 
// (Hint: to add element to the beginning use arr.unshift())
function solution4(arr, n){
    if(n === 0){
        return arr;
    }
    if(n > 0){
        arr.unshift(arr[arr.length-1])
        arr.pop()
        n--
    return solution4(arr,n)        
    } else if (n < 0){
        arr.push(arr[0])
        arr.shift()
        n++
    return solution4(arr,n)
    }
return arr;   
};


//5. Create a function that builds a tree like object given an array with object which contains parent and id properties.
function solution5(arr){
    const idIndex = arr.reduce((acc, el, i) => {
    acc[el.id] = i;
    return acc;
    }, {});
    let root;
    arr.forEach(el => {
        if (el.parent === null) {
            root = el;
            return;
        }
    const parentOfel = arr[idIndex[el.parent]];
    parentOfel[el.id] = el;
    });
    var tree = {}
    tree[root.id] = root;
    arr.forEach(el => {
        for (key in el) {
            if(key === 'parent' || key === 'id'){
                delete el[key];
            }
        }
    });
return tree;
}


// 6. Write a JavaScript function to get all possible subsets of given length of the given array.
// Assume that all elements in the array are unique.
function solution6(arr, endIndex, sizeOfCombinations, currentIndex, data, startIndex){
    if (currentIndex == sizeOfCombinations) {
        let subArr = [];     
        for (let j = 0; j < sizeOfCombinations; j++) { 
            subArr.push(data[j])
        }
    result.push(subArr);
    return; 
    }
    if (startIndex >= endIndex) {return;}       
    data[currentIndex] = arr[startIndex];
    solution6(arr, endIndex, sizeOfCombinations, currentIndex + 1, data, startIndex + 1);
    solution6(arr, endIndex, sizeOfCombinations, currentIndex, data, startIndex + 1);
};
function printCombination(arr, r){
    result = []
    let n = arr.length;
    const data = new Array(r);
    solution6(arr, n, r, 0, data, 0);
    return result;
};


// 7. Create constructor function which instances would be objects with already implemented method "map" (like Array.map).
function ObjectMap(){
    this.map = function(doFunction){
                    let result = {};
                    let index = -1;
                    let valArr = Object.values(this).slice()
                    for (let key in this){
                        key !== 'map' && (result[key] = doFunction(this[key], index, valArr));
                    index++                       
                    }
                    return result;
               }
}

// THANKS FOR YOUR TIME DEDICATED !

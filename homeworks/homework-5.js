/***
 *                      .___       
 *      ____   ____   __| _/ ____  
 *    _/ ___\ /  _ \ / __ |_/ __ \ 
 *    \  \___(  <_> ) /_/ |\  ___/ 
 *     \___  >\____/\____ | \___  >
 *         \/            \/     \/ 
 */
 
 //1. Given a sorted array and an element from that array. Find the index of that element using binary search.
 function solution1(givenArray, num){
    let indexMap = []
    givenArray.map((item, index)=> {
    indexMap.push({item, index})
    });
    while(indexMap.length > 1)     {
        indexMap = num >= indexMap[Math.trunc(indexMap.length/2)].item? 
                         indexMap.slice(Math.trunc(indexMap.length/2)):
                         indexMap.slice(0, Math.trunc(indexMap.length/2))
    }   
return indexMap[0].index 
}

// THANKS FOR YOUR TIME DEDICATED !

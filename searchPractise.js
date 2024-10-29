// linearSearch===================================================================
// function indexArray(arr,tar){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===tar){
//             return i
//         }
//     }
//     return -1

// }
// console.log(indexArray([5,6,8,2,3,9],3));


// binarySearch===================================================================
// function indexArray(arr,tar){
//     let leftIndex = 0;
//     let rightIndex = arr.length -1;
//     while(leftIndex<=rightIndex){
//         let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//         if(tar === arr[middleIndex]){
//             return middleIndex
//         }
//         if(tar<arr[middleIndex]){
//             rightIndex = middleIndex-1
//         }
//         else{
//             leftIndex =middleIndex+1
//         }
//     }
//     return -1
// }
// console.log(indexArray([1,2,3,4,5,6],1));


// recursivebinarySearch===================================================================

// function recurssiveSearch(arr,tar){
//     return searchResult(arr,tar,0,arr.length-1)
// }

// function searchResult(arr,tar,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let middleIndex =Math.floor((leftIndex+rightIndex)/2)
//     if(tar === arr[middleIndex]){
//         return middleIndex
//     }
//     if(tar<arr[middleIndex]){
//         return searchResult(arr,tar,leftIndex,middleIndex-1)
//     }else{
//         return searchResult(arr,tar,middleIndex+1,rightIndex)
//     }
// }
// console.log(recurssiveSearch([1,2,3,4,5],5));



//linear search
// function indexArray(arr,tar){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]=== tar){
//             return i
//         }
//     }
//     return -1
// }
// console.log(indexArray([1,2,3,4],3));

//binary search
// function finding(arr,tar){
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1

//     while(leftIndex<= rightIndex){
//         let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//         if(tar === arr[middleIndex]){
//             return middleIndex
//         }
//         if(tar < arr[middleIndex]){
//             rightIndex = middleIndex-1
//         }else{
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1
// }
// console.log(finding([1,2,3,4,5,6,7,8],4));




// recursive search
// function finding(arr,tar){
//     return searchResult(arr,tar,0,arr.length-1)
// }

// function searchResult(arr,tar,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }

//     let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//     if(tar === arr[middleIndex]){
//         return middleIndex
//     }
//     if(tar<arr[middleIndex]){
//         return searchResult(arr,tar,leftIndex,middleIndex-1)
//     }else{
//         return searchResult(arr,tar,middleIndex+1,rightIndex)
//     }
// }
// console.log(finding([1,2,3,4,5],3));



// function linearSearch(arr,tar){
//     for(i=0;i,arr.length;i++){
//         if(arr[i]===tar){
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch([1,2,3,4,5,6],4));


// function binarySearch(arr,tar){
//     let leftIndex = 0
//     let rightIndex =arr.length-1
//     while(leftIndex<=rightIndex){
//         let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//         if(tar === arr[middleIndex]){
//             return middleIndex
//         }
//         if(tar<arr[middleIndex]){
//             rightIndex = middleIndex-1
//         }else{
//             leftIndex =middleIndex + 1
//         }
//     }
//     return -1
// }
// console.log(binarySearch([1,2,3,4,5],3));
// function linearSearch(arr,tar){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]===tar){
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch([2,4,5,6,8,7],5));

// function binarySearch(arr,tar){
//     let leftIndex = 0
//     let rightIndex = arr.length -1
//     while(leftIndex<=rightIndex){
//         let middleIndex =Math.floor((leftIndex+rightIndex)/2)
//         if(tar === arr[middleIndex]){
//             return middleIndex
//         }
//         if(tar<arr[middleIndex]){
//             rightIndex = middleIndex-1
//         }else{
//             leftIndex = middleIndex+1
//         }
//     }
//     return -1
// }
// console.log(binarySearch([1,2,3,4,5],2));

function binarySearch(arr,tar){
    return searchResult(arr,tar,0,arr.length -1)
}
function searchResult(arr,tar,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1
    }
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    if(tar === arr[middleIndex]){
        return middleIndex
    }
    if(tar<arr[middleIndex]){
        return searchResult(arr,tar,leftIndex,middleIndex-1)
    }
    else{
        return searchResult(arr,tar,middleIndex+1,rightIndex)
    }
}
console.log(binarySearch([1,2,3,4,5],2));
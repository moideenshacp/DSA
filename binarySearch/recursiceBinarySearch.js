function recurssiveSearch(arr,tar){
    return searchIndex (arr,tar,0,arr.length-1)
}

function searchIndex(arr,tar,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1;
    }

    let middleIndex = Math.floor((leftIndex+rightIndex)/2)

    if(tar === arr[middleIndex]){
        return middleIndex
    }

    if(tar<arr[middleIndex]){
        return searchIndex(arr,tar,leftIndex,middleIndex-1)
    }else{
        return searchIndex(arr,tar,middleIndex+1,rightIndex)
    }
}

console.log(recurssiveSearch([1,2,3,4,5,6],7));

//big - o = o(logn)
function isSorted(arr){
    for(let i = 1;i<arr.length;i++){
        if(arr[i] > arr [i+1]){
            return false
        }
    }
    return true
}



function indexArray(arr,tar){
    if(!isSorted){
        return 'array is not sorted'
    }

    leftIndex= 0;
    rightIndex = arr.length -1;

    while(leftIndex<=rightIndex){
       let  middleIndex= Math.floor((leftIndex+rightIndex)/2);
        if(tar === arr[middleIndex]){
            return middleIndex
        }

        if(tar<arr[middleIndex]){
            rightIndex = middleIndex - 1;
        }else{
            leftIndex = middleIndex + 1
        }
    }
    return -1;

}
console.log(indexArray([9,1,6,2,3,4,5,],6));


//Big - o = o(logn )
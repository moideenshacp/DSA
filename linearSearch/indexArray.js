function indexArray(arr,n){

    for(i=0;i<arr.length;i++){
        if(arr[i]===n){
            return i
        }
    }
    return -1
}

console.log(indexArray([1,2,3,4,5,6],5));

//big - o = o(n)
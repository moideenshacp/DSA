function selectionSort(){
    for(i=0;i<arr.length;i++){
        let minIndex = i
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex !==i){
            let temp = arr[i]
            arr[i]= arr[minIndex]
            arr[minIndex] = temp
        }

    }
}
const arr = [-2, 8, -6, 20, 4]
selectionSort(arr)
console.log(arr);

// /big - o(n^2)
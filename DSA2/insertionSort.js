function insertionSort(arr){

    for(let i=1;i<arr.length;i++){
        let numberToInsert = arr[i]
        let j = i-1;
        while(j>=0 && arr[j]>numberToInsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1] = numberToInsert

    }
}
const arr = [-2, 8, -6, 20, 4]
insertionSort(arr)
console.log(arr);

// Bi-o = o(n^2)
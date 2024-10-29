function fibonocci (n){
    const arr= [0,1]
    for(i=2;i<=n;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr
}

console.log(fibonocci(2));
console.log(fibonocci(4));
console.log(fibonocci(6));

//Big-o = O(n)
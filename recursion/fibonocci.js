function fibonocci(n){
    if(n<2){
        return n
    }
    return fibonocci(n-1)+fibonocci(n-2)
}
console.log(fibonocci(7));

//big - o = o(2^n)
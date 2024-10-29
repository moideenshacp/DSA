// function powerOfTwo(n){
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n%2 !==0){
//             return false
//         }
//         n=n/2
//     }
//     return true
// }
// console.log(powerOfTwo(8));

//Big-o = o(logn)



function powerOfTwo(n){
    if(n<0){
        return false
    }
    return (n & (n-1))===0
}
console.log(powerOfTwo(3));


//Big-o = o(1)

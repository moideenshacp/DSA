function factorial(n){
    let result =1;
    for(i=2;i<=n;i++){                             //3*2*1=6
        result*=i
    }
    return result
} 
console.log(factorial(4));

//o(n)
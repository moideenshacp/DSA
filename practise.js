//facorial==================================================================
// function facorial(n){
//     let result = 1
//     for(i=2;i<=n;i++){
//         result*=i
//     }
//     return result

// }
// console.log(facorial(3));
//fibonnocci==================================================================
// function fibonnocci(n){
//     let arr = [0,1]
//     for(i=2;i<=n;i++){
//         arr[i]=arr[i-1]+arr[i-2]
//     }
//     return arr
// }
// console.log(fibonnocci(3));

//powerOfTwo==================================================================
// function powerOfTwo(n){
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n%2==0){
//             return false
//         }
//         n=n/2
//     }
//     return true

// }
// console.log(powerOfTwo(5));
//primeNumber==================================================================
// function primeNumber(n){
//     if(n<2){
//         return false
//     }
//     for(i=2;i<n;i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }
// console.log(primeNumber(6));

//recursion**************************************************************************************************************


//factorial***************************************

// function factorial(n){
//     if(n===0){
//         return 1
//     }
//     return n*factorial(n-1)
// }

// console.log(factorial(3));

//fibonocci***************************************

// function fibonnocci(n){
//     if(n<2){
//         return n
//     }
//     return fibonnocci(n-1)+fibonnocci(n-2)
// }
// console.log(fibonnocci(6));

// let str = 'hello world'
// let reversed = str.split(' ').reverse().join(' ')
// console.log(reversed);


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head = null
//         this.size =0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     sizeOf(){
//         return this.size
//     }
//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//         }
//         this.size++

//     }
//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     insert(value,index){
//         if(index<0 || index>this.sizeOf()){
//             console.log('invalid index');
//         }
//         const node = new Node(value)
//         if(index === 0){
//             node.next = this.head
//             this.head = node
//         }else{
//             let pre = this.head
//             for(let i=0;i<index-1;i++){
//                 pre = pre.next
//             }
//             node.next = pre.next
//             pre.next = node
//         }
//         this.size++
//     }
//     remove(index){
//         if(index<0 || index>this.sizeOf()){
//             console.log('invalid index');
//         }
//         let removeNode;
//         if(index ===0){
//             removeNode = this.head
//             this.head = this.head.next
//         }else{
//             let pre = this.head
//             for(let i=0;i<index-1;i++){
//                 pre = pre.next
//             }
//             removeNode = pre.next
//             pre.next = removeNode.next
//         }
//         this.size--
//         return removeNode.value
//     }
//     search(value){
//         if(this.isEmpty()){
//             return -1
//         }
//         else{
//             let cur = this.head
//             for(let i=0;i<this.sizeOf();i++){
//                 if(cur.value === value){
//                     return i
//                 }
//                 cur = cur.next
//             }
//             return -1
//         }
//     }
//     reverse(){
//         let pre = null
//         let cur = this.head
//         while(cur){
//             let next = cur.next
//             cur.next = pre
//             pre = cur
//             cur = next
//         }
//         this.head = pre
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('empty');
//         }else{
//             let cur = this.head
//             let value = ''
//             while(cur){
//                 value += `${cur.value}- `
//                 cur= cur.next
//             }
//             console.log(value);
//         }
//     }
// }
// const list = new linkedList()
// list.append(10)
// list.append(20)
// list.append(30)
// list.prepend(0)
// list.insert(40,4)
// list.remove(4)
// list.reverse()
// list.print()


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }
//     sizeOf(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }
//         else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let pre = this.head
//             while(pre.next){
//                 pre = pre.next
//             }
//             node.next = pre.next
//             pre.next = node
//         }
//         this.size++
//     }

//     insert(value,index){
//         if(index<0 || index>this.sizeOf()){
//             console.log('invalid index');
//         }
//         const node = new Node(value)
//         if(index === 0){
//             node.next = this.head
//             this.head = node
//         }
//         else{
//             let pre = this.head
//             for(i=0;i<index-1;i++){
//                 pre = pre.next
//             }
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     remove(index){
//         if(index<0 || index >this.sizeOf()){
//             console.log('invalid index');
//         }
//         let removeNode
//         if(index === 0){
//             removeNode = this.head
//             this.head = this.head.next
//         }else{
//             let pre = this.head
//             for(i=0;i<index-1;i++){
//                 pre = pre.next
//             }
//             removeNode = pre.next
//             pre.next = removeNode.next
//         }
//         this.size--
//         return removeNode
//     }
//     reverse(){
//         let pre = null 
//         let cur = this.head
//         while(cur){
//             let next = cur.next
//             cur.next = pre
//             pre= cur
//             cur = next
//         }
//         this.head = pre
//     }
//     search(value){
//         if(this.isEmpty()){
//             console.log('empty');
//         }
//             let cur = this.head
//             for(let i=0;i<this.sizeOf();i++){
//                 if(cur.value === value){
//                     return i
//                 }
//                 cur = cur.next
//             }
        
//         return -1
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('empty');
//         }else{
//             let cur = this.head
//             let values = ''
//             while(cur){
//                 values+=`${cur.value} `
//                 cur= cur.next
//             }
//             console.log(values);
//         }
//     }
// }

// const list = new linkedList()
// list.prepend(10)
// list.prepend(20)
// list.append(30)
// list.insert(0,0)
// list.remove(0)
// list.print()
// list.reverse()
// console.log(list.search(10));
// list.print()


class Node{
    constructor(value){
        this.value = value
        this.next = null
}
}
class linkedList{
    constructor(){
        this.head = null
        this.size =0
    }
    isEmpty(){
        return this.size === 0

    }
    sizeOf(){
        return this.size
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            let pre = this.head
            while(pre.next){
                pre = pre.next
            }
            node.next = pre.next
            pre.next = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('empty');
        }else{
            let cur = this.head
            let values = ''
            while(cur){
                values+=`${cur.value} `
                cur = cur.next
            }
            console.log(values);
        }
    }
}

function arrayToList(arr){
    const list = new linkedList()
    for(let value of arr){
     list.append(value)   
    }
    return list

}
const arr = [1,2,3,4,5]
const list = arrayToList(arr)
list.print()
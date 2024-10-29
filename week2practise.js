//buble sort----------------------------------------------------------------------------------------------------------------

// eg-1)
// function bubbleSort(){
//     let swapped;
//     do{
//         swapped = false
//         for(i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]= temp
//                 swapped = true
//             }
//         }
//     }while(swapped)
// }
// const arr =[-2, 8, 6, 20, 4]         
// bubbleSort(arr)
// console.log(arr);

//eg-2)
// function bubbleSort(){
//     let swapped;
//     do{
//         swapped=false
//         for(i=0;i<nums.length-1;i++){
//             if(nums[i]>nums[i+1]){

//                 let temp = nums[i]
//                 nums[i]= nums[i+1]
//                 nums[i+1]= temp
//                 swapped=true
//             }
//         }
//     }while(swapped)
//         return nums
// }
// const nums= [5, 3, 8, 6, 2, 7, 4, 1, 5, 3, 8]
// bubbleSort(nums)
// console.log(nums);

//INSERTION SORT ---------------------------------------------------------------------------------------------------
// function insertionSort(){
//     for(i=1;i<arr.length;i++){
//         let numberToInsert = arr[i]
//         let j =i-1
//         while(j>=0 && arr[j]>numberToInsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numberToInsert
//     }
// }

// const arr=[-2, 8, 6, 20, 4]
// insertionSort(arr)
// console.log(arr);

// eg-1)
// function insertionSort(){
//     for(i=1;i<scores.length;i++){
//         let numberToInsert = scores[i]
//         let j= i-1

//         while(j>=0 && scores[j]>numberToInsert){
//             scores[j+1] = scores[j]
//             j=j-1
//         }
//         scores[j+1] = numberToInsert
//     }
// }
// const scores = [78, 92, 45, 88, 53, 99, 62];
// insertionSort(scores)
// console.log(scores);

// eg-2)


// function insertionSort(){
//     for(i=1;i<books.length;i++){
//         let numberToInsert = books[i]
//         let j = i-1
//         while(j>=0 && arr[j] > numberToInsert){
//             books[j+1]= arr[j]
//             j=j-1
//         }
//         books[j+1] = numberToInsert

//     }
// }

// const books = ["The Catcher in the Rye", "To Kill a Mockingbird", "1984", "Moby Dick", "Pride and Prejudice"];
// insertionSort(books)
// console.log(books);



//QUICK SORT --------------------------------------------------------------------------------------------------------------

//  Eg - 1)================================
// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// const arr = [-2, 8, 6, 20, 4];
// const sortedArr = quickSort(arr)
// console.log(sortedArr);

//eg-2)==============================

// function quickSort(ages){
//     if(ages.length<2){
//         return ages
//     }

//     let pivot = ages[ages.length-1]
//     let left = []
//     let right = []
//     for(i=0;i<ages.length-1;i++){
//         if(ages[i]<pivot){
//             left.push(ages[i])
//         }else{
//             right.push(ages[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// const ages = [32, 45, 28, 39, 22, 36, 41, 25];
// const sorted = quickSort(ages)
// console.log(sorted);

//eg-3)=============================


// function quickSort(cities){
//     if(cities.length<2){
//         return cities
//     }

//     let pivot = cities[cities.length-1]
//     let left  = []
//     let right = []
//     for(i=0;i<cities.length-1;i++){
//         if(cities[i]<pivot){
//             left.push(cities[i])
//         }else{
//             right.push(cities[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }


// const cities = ["New York", "San Francisco", "Chicago", "Los Angeles", "Seattle"];
// const sorted = quickSort(cities)
// console.log(sorted);


//MERGE SORT------------------------------------------------------------------------------------------------------

//eg-1)
// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }

//     let mid = Math.floor(arr.length/2)
//     let leftArray = arr.slice(0,mid)
//     let rightArray = arr.slice(mid)
//     return merge(mergeSort(leftArray),mergeSort(rightArray))
// }

// function merge(leftArray,rightArray){
//     let sortedArray = []
//     while(leftArray.length && rightArray.length){
//         if(leftArray[0]<rightArray[0]){
//             sortedArray.push(leftArray.shift())
//         }else{
//             sortedArray.push(rightArray.shift())
//         }
//     }
//     return [...sortedArray,...leftArray,...rightArray]
// }
// const arr = [-2, 8, -6, 20, 4];
// const sortedArr = mergeSort(arr)
// console.log(sortedArr);


//eg-2)
// function mergeSort(scores){
//     if(scores.length<2){
//         return scores
//     }
//     let mid = Math.floor(scores.length/2)
//     let leftArray = scores.slice(0,mid)
//     let rightArray = scores.slice(mid)
//     return merge(mergeSort(leftArray),mergeSort(rightArray))
// }

// function merge(leftArray,rightArray){
//     const sortedArray = []
//     while(leftArray.length && rightArray.length){
//         if(leftArray[0] <= rightArray[0]){
//             sortedArray.push(leftArray.shift())
//         }else{
//             sortedArray.push(rightArray.shift())
//         }
//     }
//     return [...sortedArray,...leftArray,...rightArray]
// }
// const scores = [85, 95, 70, 60, 90, 75, 80, 100];
// const sorted = mergeSort(scores)
// console.log(sorted);

// ========================================PRACTICE========================================================================

// function bubbleSort(){
//     let swapped;
//     do{
//         swapped = false
//         for(i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped)
//         return arr
// }
// const arr = [85, 95, 70, 60, 90, 75, 80, 100]
// bubbleSort(arr)
// console.log(arr);

// function insertionSort(){
//     for(i=1;i<arr.length;i++){
//         let numberToInsert = arr[i]
//         let j= i-1

//         while(j>=0 && arr[j]>numberToInsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numberToInsert
//     }
//         return arr
// }
// const arr = [85, 95, 70, 60, 90, 75, 80, 100]
// insertionSort(arr)
// console.log(arr);

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right  = []
//     for(i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// const arr = [85, 95, 70, 60, 90, 75, 80, 100]
// const sorted = quickSort(arr)
// console.log(sorted);

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let leftArray = arr.slice(0,mid)
//     let rightArray = arr.slice(mid)
//     return merge(mergeSort(leftArray),mergeSort(rightArray))
// }
// function merge(leftArray,rightArray){
//     let sortedArray = []
//     while(leftArray.length && rightArray.length){
//         if(leftArray[0]<=rightArray[0]){
//             sortedArray.push(leftArray.shift())
//         }else{
//             sortedArray.push(rightArray.shift())
//         }
//     }
//     return [...sortedArray,...leftArray,...rightArray]
// }

// const arr = [85, 95, 70, 60, 90, 75, 80, 100]
// const sorted = mergeSort(arr)
// console.log(sorted);


// ================================================STACK  &&  QUEUE==============================================================
// class Queue{
//     constructor(){
//         this.items = {}
//         this.rear = 0
//         this.front = 0
//     }

//     enqueue(element){
//         this.items[this.rear] = element
//         this.rear ++
//     }
//     denqueue(){
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }
//     isEmpty(){
//         return this.rear -this.front === 0
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[this.front]
//         }
//         return null
//     }
//     size(){
//         return this.rear - this.front
//     }
//     print(){
//         console.log(this.items);
//     }
// }

// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.denqueue()
// console.log(queue.size());
// queue.print()

// class Queue{
//     constructor (){
//         this.item = []
//     }
//     enqueue(element){
//         this.item.push(element)
//     }
//     denqueue(){
//         return this.item.shift()
//     }
//     isEmpty(){
//         return this.item.length ===0
//     }
//     peek(){
//         return this.item[0]
//     }
//     print(){
//         console.log(this.item);
//     }

//     reverse(){
//         if(this.isEmpty()){
//             return
//         }

//         const front = this.denqueue()
//         this.reverse()
//         this.enqueue(front)
//     }

//     smallestNum(){
//         let min = this.item[0]
//         for(let i=1;i<this.item.length;i++){
//             if(this.item[i]<min){
//                 min = this.item[i]
//             }
//         }
//         return min
//     }
// }

// const queue= new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(2)
// console.log(queue.smallestNum());
// queue.print()

// class Stack{
//     constructor(){
//         this.item = []
//     }
//     push(element){
//         this.item.push(element)
//     }
//     pop(){
//         return this.item.pop()
//     }
//     isEmpty(){
//         return this.item.length === 0
//     }
//     print(){
//         console.log(this.item);
//     }

    // reverseStack(reverse = []){
    //     if(reverse.length === this.item.length){
    //         this.item = reverse
    //         return
    //     }

    //     reverse.push(this.item[this.item.length - (reverse.length + 1)])
    //     this.reverseStack(reverse)
    // }
// }
// const stack = new Stack()
// stack.push(30)
// stack.push(40)
// stack.push(50)
// stack.print()
// stack.reverseStack()
// stack.print()
// ------------------------------------------reverse queue------------------------------------------------------

// class Queue{
//     constructor(){
//         this.item = []
//     }

//     enqueue(element){
//         this.item.push(element)
//     }
//     denqueue(){
//         return this.item.shift()
//     }
//     isEmpty(){
//         return this.item.length === 0
//     }
//     peek(){
//         return this.item[0]
//     }
//     size(){
//         return this.item.length
//     }
//     print(){
//         console.log(this.item);
//     }

//     reverse(){
//         if(this.isEmpty()){
//             return 
//         }

//         const front = this.denqueue()
//         this.reverse()
//         this.enqueue(front)
//     }

//     smallestNum(){
//         if(this.isEmpty()){
//             return null
//         }

//         let min = this.item[0]
//         for(let i=1;i<this.item.length;i++){
//             if(this.item[i]<min){
//                 min = this.item[i]
//             }
//         }
//         return min

        
//     }

// }

// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(50)
// queue.enqueue(20)
// queue.enqueue(1)
// queue.print()
// queue.reverse()
// console.log(queue.smallestNum());
// queue.print()

// ------------------------------------------reverse stack------------------------------------------------------


// class Stack{
//     constructor(){
//         this.item = []
//     }

//     push(element){
//         this.item.push(element)
//     }
//     pop(){
//         return this.item.pop()
//     }
//     isEmpty(){
//         return this.item.length === 0
//     }
//     print(){
//         console.log(this.item);
//     }
//     reverseStack(reversed = []){
//         if(reversed.length === this.item.length){
//             this.item =  reversed
//             return
//         }

//         reversed.push(this.item[this.item.length - (reversed.length+ 1)])
//         this.reverseStack(reversed)
//     }
// }

// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.print()
// stack.reverseStack()
// stack.print()


// ----------------------------------------------hashTable---------------------------------------------------

// class hashTable{
//     constructor(size){
//         this.table = new Array (size)
//         this.size = size
//     }

//     hash(key){
//         let total  =0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         const index = this.hash(key)
//         this.table[index] = value
//     }
//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index=this.hash(key)
//         return this.table[index]=undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }
// function removeDuplicate(str){
//     const table = new hashTable(50)
//     let result = ''
//     for(let char of str){
//         if(!table.get(char)){
//             table.set(char,true)
//             result+=char
//         }
//     }
//     return result
// }

// const stringData ='malayalam'
// const result = removeDuplicate(stringData)
// console.log(result);

// class Stack{
//     constructor(){
//         this.item = []
//     }

//     push(element){
//         this.item.push(element)
//     }
//     pop(){
//         return this.item.pop()
//     }

//     isEmpty(){
//         return this.item.length === 0
//     }

//     print(){
//         console.log(this.item);
//     }

    
// }

// function reverseString(str){
//     const stack = new Stack()
//     let result = ''
//     for(let char of str){
//         stack.push(char)
//     }

//     while(!stack.isEmpty()){
//         result+=stack.pop()
//     }
//     return result

// }

// const stringData = 'Hello'
// const result = reverseString(stringData)
// console.log(result);


// ------------------------------stackusing queue----------------------------------------------------------------------

// class StackUsingQueue{
//     constructor(){
//         this.queue1 = []
//         this.queue2=[]
//     }
//     isEmpty(){
//         return this.queue1.length ===0
//     }

//     push(element){
//         this.queue1.push(element)
//     }
    // pop() {
    //     if (this.isEmpty()) {
    //         console.log('Stack is empty');
    //         return;
    //     }

    //     while (this.queue1.length > 1) {
    //         this.queue2.push(this.queue1.shift());
    //     }

    //     const poppedElement = this.queue1.shift();

    //     [this.queue1, this.queue2] = [this.queue2, this.queue1];

    //     return poppedElement;
    // }
//     print(){
//         console.log(this.queue1);
//     }
// }
// const stack = new StackUsingQueue()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.pop()
// stack.print()


// ----------------------------------------------------------------------------------------------------------------------
// class hashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size =size
//     }

//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             const sameKeyIndex = bucket.find(item => item[0]===key)
//             if(sameKeyIndex){
//                 sameKeyIndex[1]=value
//             }else{
//                 bucket.push([[key,value]])
//             }
//         }
//     }

//     get(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKeyIndex = bucket.find(item => item[0]===key)
//             if(sameKeyIndex){
//                 return sameKeyIndex[1]
//             }
//         }
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }
// const table = new hashTable(50)
// table.set('name','sha')
// table.set('age','18')
// console.log(table.get('age'))
// table.display()


class Queue{
    constructor(){
        this.stack1= []
        this.stack2= []
    }
    enqueue(element){
        this.stack1.push(element)
    }
    denqueue(){
        if(this.stack2.length === 0){
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
    print(){
        if(this.stack2.length >0){
            console.log([...this.stack2.reverse(),...this.stack1]);
        }else{
            console.log(this.stack1);
        }
    }
}
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.denqueue()
queue.print()
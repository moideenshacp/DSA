// class Node {
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
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('nothing');
//         }else{
//             let cur = this.head
//             let values = ''
//             while(cur){
//                 values+=`${cur.value} `
//                 cur = cur.next
//             }
//             console.log(values);
//         }

//     }
// }
// const list = new linkedList()

// console.log('empty?',list.isEmpty())
// console.log('size?',list.sizeOf())
// list.prepend(10)
// list.prepend(20)
// list.print()


// append============================================================================================
// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//         this.tail =  null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
    
//         }
//     sizeOf(){
//         return this.size
//         }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('empty');
//         }else{
//             let cur = this.head
//             while(cur){
//                 console.log(cur.value);
//             cur = cur.next

//             }
//         }
//     }
// }
// const list = new linkedList()
// list.append(10)
// list.append(20)

// list.print()



//insert=====================================================================================
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
//    insert(value,index){

//     const node = new Node(value)

//     if(index<0 || index>this.sizeOf()){
//         console.log('invalid index');
//     }else if(index === 0){
//         node.next = this.head
//         this.head = node
//     }else{
//         let pre = this.head
//         for(i=0;i<index-1;i++){
//             pre = pre.next
//         }
//         node.next = pre.next
//         pre.next = node
//     }
//     this.size++


//     print(){
//         if(this.isEmpty()){
//             console.log('empty');
//         }else{
//             let cur = this.head
//             while(cur){
//                 console.log(cur.value)
//                 cur = cur.next
//             }
//         }
//     }
    

// }

// const list = new linkedList()
// list.insert(10,0)
// list.insert(20,0)

// list.print()


//remove=======================================================================================================
// class Node{
//     constructor(value){
//         this.value = value
//         this.next= null
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
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     remove(index){
//         let removeNode;

//         if(index<0 || index>this.sizeOf()){
//             console.log('invalid index');
//         }if(index === 0){
//             removeNode= this.head
//             this.head = this.head.next
//         }else{
            
//             let pre = this.head
//             for(let i=0;i<index-1;i++){
//                 pre = pre.next 
//             }
//             removeNode = pre.next
//             pre.next = removeNode.next
//             this.size--
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
//         }
//         return -1
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('empty');
//         }else{
//             let cur = this.head
//             while(cur){
//                 console.log(cur.value)
//                 cur = cur.next
//             }
//         }
//     }
// }
// let list = new linkedList()
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.prepend(40)
// list.reverse()
// console.log( list.search(40));
// list.print()


///practice

class Node{
    constructor(value){
        this.value= value
        this.next =null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size ===0
    }
    sizeOf(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++

    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node

        }else{
            let pre = this.head
            while(pre.next){
                pre = pre.next
            }
            pre.next = node
        }
        this.size++
    }
    insert(value,index){
        if(index<0 ||index>this.sizeOf()){
            console.log('invalidi index');
        }
        const node = new Node(value)
        if(index === 0){
            node.next = this.head
            this.head = node
        }else{
            let pre = this.head
            for(i=0;i<index-1;i++){
                pre = pre.next
            }
            node.next = pre.next
            pre.next = node
        }
        this.size++
    }
    remove(index){
        if(index<0 || index>this.sizeOf()){
            console.log('invlaid index');
        }
        let removeNode
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let pre = this.head
            for(i=0;i<index-1;i++){
                pre = pre.next
            }
            removeNode = pre.next
            pre.next =removeNode.next
        }
        this.size--
    }
    reverse(){
      let pre = null
      let cur = this.head
      while(cur){
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next

      }
      this.head = pre
    }
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let cur = this.head
        for(let i=0;i<this.sizeOf();i++){
            if(cur.value === value){
                return i
            }
            cur = cur.next
        }
        return -1
    }

    print(){
        if(this.isEmpty()){
            console.log('empty');
        }
        else{
            let cur = this.head
            let value = ''
            while(cur){
                value += `${cur.value} `
                cur= cur.next
            }
            console.log(value);
        }
    }
}
const list = new linkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.append(0)
list.insert(40,0)
list.remove(0)
list.reverse()
console.log(list.search(30));
list.print()
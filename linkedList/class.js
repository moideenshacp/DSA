// class Node{
//     constructor (value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size ===0
//     }

//     sizeOf(){
//         return this.size
//     }
// }

// const list = new linkedList()

// console.log('is empty',list.isEmpty())
// console.log('size',list.size);



class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
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
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
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
            values += `${cur.value} `
            cur = cur.next
        }
        console.log(values);
    }
    }
}
const list = new linkedList()
console.log(list.isEmpty())
console.log(list.sizeOf())
list.append(20)
list.append(30)

list.print()
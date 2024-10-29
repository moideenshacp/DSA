class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size=0;
    }

    isEmpty(){
    return this.size ===0;
    }

    sizeOf(){
    return  this.size
    }

    prepend(value){

        const node  = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size ++
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

    removeFront(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }
    removeEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.tail.value
        if(this.sizeOf === 1){
            this.head = null
            this.tail = null
        }else{
            let pre = this.head
            while(pre.next !== this.tail){
                pre = pre.next
            }
            pre.next =null
            this.tail = pre
        }
        this.size --
        return value
    }

    print(){
        if(this.isEmpty()){
            console.log('nothing in the list');
        }else{
            let cur  = this.head;
            let listvalues = ''
            while(cur){
                listvalues+= `${cur.value} `
                cur =cur.next
            }

            console.log(listvalues);
        }
    }

   
}


  
const list = new linkedList()
console.log('is empty',list.isEmpty())
console.log('size',list.sizeOf())
list.print()

list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
list.removeFront()
list.removeEnd()
list.print()


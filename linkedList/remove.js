class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size=0;
    }

    isEmpty(){
    return this.size ===0;
    }

    sizeOf(){
    return  this.size
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next  = this.head;
            this.head = node;
        }
        this.size++
    }
    
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head =node
        }else{
            let pre = this.head;
            while(pre.next){
                pre = pre.next
            }
            pre.next = node
        }
        this.size++
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
    insert(value,index){
        if(index<0 ||index >this.sizeOf()){
            return console.log('invalid index');
        }
        if(index ===0){
            this.prepend(value)
        }else{
            const node = new Node()
            let pre = this.head
            for(let i=0;i<index-1;i++){
                pre=pre.next
            }
            node.next = pre.next;
            pre.next = node;
            this.size++
        }
    }

    remove(index){
        if(index<0 || index>=this.sizeOf()){
            return console.log('invalid index');
        }
        let removeNode
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next

        }else{
            let pre = this.head;
            for(let i=0;i<index -1;i++){
                pre = pre.next
            }
            removeNode = pre.next;
            pre.next = removeNode.next
        }
        this.size --
        return removeNode.value
    }
}


  
const list = new linkedList()
console.log('is empty',list.isEmpty())
console.log('size',list.sizeOf())
list.print()

list.insert(40,0)
list.insert(50,0)
list.insert(60,0)
list.remove(1)

list.print()


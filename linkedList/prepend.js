class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
      return this.size === 0 
    }
    sizeOf(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
            
        }
        this.size++
    }

    print(){
        if (this.isEmpty()) {
            console.log('this is empty');
        } else {
            let cur = this.head;
            let listvalues = '';
            while(cur){
                listvalues += `${cur.value} `;
                cur = cur.next
            }
            console.log(listvalues);
            
        }
    }

}

const list = new linkedList()
console.log('is empty?',list.isEmpty());
console.log('size',list.sizeOf());
list.prepend(10)
list.prepend(20)
list.print()




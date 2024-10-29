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
    }
     
    const list = new linkedList()
    console.log('is empty',list.isEmpty())
    console.log('size',list.sizeOf())
    list.print()

    list.append(10)
    list.append(20)
    list.append(30)
    list.print()
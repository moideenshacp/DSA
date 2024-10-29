class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
           this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left , node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }

        }
    }
    search(root,value){
        if(!root){
            return false
        }else{
            if(value === root.value){
                return true
            }else if(value < root.value){
                return this.search(root.left ,value)
            }else{
                return this.search(root.right,value)
            }
        }

    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root,result){
        if(root){
            this.inOrder(root.left,result)
            result.push(root.value)
            this.inOrder(root.right,result)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
    levelOrder(){
        const queue =[]

        queue.push(this.root)
        while(queue.length){
            let cur = queue.shift()
            console.log(cur.value)
            if(cur.left){
                queue.push(cur.left)
            }
            if(cur.right){
                queue.push(cur.right)
            }
        }
    }
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    delete(value){
        this.root =  this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(!root){
            return root
        }
        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.right
            }

            root.value = this.min(root.right)                                               
            root.right = this.deleteNode(root.right,value)
        }
        return root

    }
    isBst(root,min=null,max=null){
        if(!root){
            return true
        }
        if((min !== null && root.value <= min) || (max !== null && root.value >= max)){
            return false
        }
        return this.isBst(root.left,min,root.value ) && this.isBst(root.right,root.value,max)
    }
    sumOfValues(root){
        if(!root){
            return 0
        }
        return root.value + this.sumOfValues(root.left)+this.sumOfValues(root.right)
    }
    isPowerOfTwo(n){
        if(n<=0){
            return false
        }
        return (n&(n-1))===0;
    }
    containPowerOfTwo(root){
        if(!root){
            return false
        }
        if(this.isPowerOfTwo(root.value)){
            return true
        }
        return this.containPowerOfTwo(root.left) || this.containPowerOfTwo(root.right)
    }
    KthLargest(k){
        let result = []
        this.inOrder(this.root,result)
        if(k>0 && k <= result.length){
            return result[result.length-k]
        }else{
            return null
        }
    }
    KthSmallest(k){
        const result =[]
        this.inOrder(this.root,result)
        if(k>0 && k <= result.length){
            return result[k-1]
        }else{
            return null
        }
    }

}
const bst = new BinarySearchTree()
console.log(bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(5)
bst.insert(3)
bst.insert(7)
console.log(bst.KthSmallest(1));



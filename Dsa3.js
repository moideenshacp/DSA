// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return
//     }
// }

// ===========================================graph======================================================================4
// class Graph{
//     constructor(){
//         this.adjecencyList ={}
//     }
//     addVertex(vertex){
//         if(!this.adjecencyList[vertex]){
//             this.adjecencyList[vertex] = new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjecencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjecencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjecencyList[vertex1].add(vertex2)
//         this.adjecencyList[vertex2].add(vertex1)
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjecencyList[vertex1].delete(vertex2)
//         this.adjecencyList[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.adjecencyList[vertex]){
//             return
//         }
//         for(let adjacentVertex of this.adjecencyList[vertex]){
//             this.removeEdge(vertex,adjacentVertex)
//         }
//         delete this.adjecencyList[vertex]
//     }
//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjecencyList[vertex1].has(vertex2) &&
//             this.adjecencyList[vertex2].has(vertex1)
//         )
//     }
//     display(){
//         for(let vertex in this.adjecencyList){
//             console.log(vertex ,'=>',[...this.adjecencyList[vertex]]);
//         }
//     }
//     bfs(start){
//         let queue = [start]
//         let visited = new Set()
//         let result =[]
//         visited.add(start)
//         while(queue.length > 0){
//             let vertex = queue.shift()
//             result.push(vertex)
//             for(let neighbour of this.adjecencyList[vertex]){
//                 if(!visited.has(neighbour)){
//                     visited.add(neighbour)
//                     queue.push(neighbour)
//                 }
//             }
//         }
//         return result
//     }
//     dfs(start){
//         let visited = new Set()
//         let result =[]
//         const dfshelper = (vertex)=>{
//             visited.add(vertex)
//             result.push(vertex)
//             for(let neighbour of this.adjecencyList[vertex]){
//                 if(!visited.has(neighbour)){
//                     dfshelper(neighbour)
//                 }
//             }
//         }
//         dfshelper(start)
//         return result
//     }
// }
// const graph = new Graph()
// graph.addVertex('a')
// graph.addVertex('b')
// graph.addVertex('c')
// graph.addEdge('a','b')
// graph.addEdge('b','c')
// graph.display()
// console.log(graph.dfs('b'));

// ================================================heap===================================================================

// class MinHeap{
//     constructor(){
//         this.heap = []
//     }
//     getParentIndex(index){
//         return Math.floor((index - 1)/2)
//     }
//     getLeftChildIndex(index){
//         return 2 * index + 1
//     }
//     getRightChildIndex(index){
//         return 2 * index + 2
//     }
//     swap(index1,index2){
//         [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]]
//     }
//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }
//     heapifyUp(){
//         let index = this.heap.length - 1
//         while(index > 0){
//             let parentIndex = this.getParentIndex(index)
//             if(this.heap[parentIndex] > this.heap[index]){
//                 this.swap(index,parentIndex)
//                 index = parentIndex
//             }else{
//                 break
//             }
//         }
//     }
//     extractMin(){
//         if(this.heap.length ===0 ) return null
//         if(this.heap.length ===1 )return this.heap.pop()

//             const min = this.heap[0]
//             this.heap[0] = this.heap.pop()
//             this.heapifyDown(0)
//             return min
//     }
//     heapifyDown(index){
//         let smallest = index
//         let leftChildIndex = this.getLeftChildIndex(index)
//         let rightChildIndex = this.getRightChildIndex(index)

//         if(leftChildIndex < this.heap.length && this.heap[leftChildIndex]< this.heap[smallest]){
//             smallest = leftChildIndex
//         }
//         if(rightChildIndex < this.heap.length && this.heap[rightChildIndex]< this.heap[smallest]){
//             smallest =rightChildIndex
//         }
//         if(index !== smallest){
//             this.swap(index,smallest)
//             this.heapifyDown(smallest)
//         }
//     }
//     heapSort(){
//         const sortedArr=[]
//         while(this.heap.length > 0){
//             sortedArr.push(this.extractMin())
//         }
//         return sortedArr
//     }
//     view(){
//         return this.heap;
//     }
// }
// const minHeap = new MinHeap();
// minHeap.insert(10);
// minHeap.insert(15);
// minHeap.insert(20);
// minHeap.insert(17);
// minHeap.insert(5);
// console.log(minHeap.heapSort());


// =================================================trie==================================================================
// class Node{
//     constructor(){
//         this.children = {}
//         this.isEnd = false
//     }
// }
// class Trie{
//     constructor(){
//         this.root = new Node()
//     }
//     insert(str){
//         let node = this.root
//         for(let char of str){
//             if(!node.children[char]){
//                 node.children[char] = new Node()
//             }
//             node = node.children[char]
//         }
//          node.isEnd = true
//     }
//     search(str){
//         let node = this.root
//         for(let char of str){
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }
//         return node.isEnd
//     }
//     searchPrefix(prefix){
//         let node = this.root
//         let result =[]
//         for(let char of prefix){
//         if(!node.children[char]){
//             return result
//         }
//         node = node.children[char]
//         }
//         this.collectWords(node,result,prefix)
//         return result
//     }
//     collectWords(node,result,prefix){
//         if(node.isEnd){
//             result.push(prefix)
//         }
//         for(let char in node.children){
//             this.collectWords(node.children[char],result,prefix + char)
//         }
//     }
// }
// const trie = new Trie()
// trie.insert('air')
// trie.insert('engine')
// trie.insert('apple')
// trie.insert('car')
// console.log(trie.searchPrefix('a'));

class Node{
    constructor(){
        this.children = {}
        this.isEnd = false
    }
}
class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(str){
        let node = this.root
        for(let i = str.length-1;i>=0;i--){
            let char = str[i]
            if(!node.children[char]){
                node.children[char] = new Node()
            }
            node = node.children[char]
        }
        node.isEnd = true
    }
    searchSuffix(suffix){
        let node = this.root
        let result = []
        for(let i = suffix.length -1;i>=0;i--){
            let char = suffix[i]
            if(!node.children[char]){
                return result
            }
            node = node.children[char]
        }   
        this.collectWords(node,result,suffix)
        return result
    }
    collectWords(node,result,suffix){
        if(node.isEnd){
            result.push(suffix)
        }
        for(let char in node.children){
            this.collectWords(node.children[char],result,char + suffix)
        }
    }
}
const trie=new Trie()
trie.insert('apple')
trie.insert('orange')
trie.insert('tag')
trie.insert('bag')
console.log(trie.searchSuffix('e'));
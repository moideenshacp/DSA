//adjacency matrix--------------------------------------------------------


// const matrix = [
//     [0,1,0],
//     [1,0,1],
//     [0,1,0]
// ]
// console.log(matrix[0][0]);


// adjacency list--------------------------------------------------
// adjacencyList ={
//     'A' : ['B'],
//     'B' :['A','C'],
//     'C' :['B']

// }
// console.log(adjacencyList['B']);

//==========================================================================================================

class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)

    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }

        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + '==>' + [...this.adjacencyList[vertex]]);
        }
    }
    Bfs(start){
        const queue = [start]
        let visited = new Set()
        let result =[]

        visited.add(start)
        while(queue.length > 0){
            const vertex = queue.shift();
            result.push(vertex)
            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
        }
        return result
    }
    Dfs(start){
        let visited = new Set()
        let result =[]
        const dfshelper =(vertex)=>{
            visited.add(vertex)
            result.push(vertex)

            for(let neighbour of this.adjecencyList[vertex]){
                if(!visited.has(neighbour)){
                    dfshelper(neighbour)
                }
            }
        }
        dfshelper(start)
        return result
    }
}
const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A','B')
graph.addEdge('B','C')
graph.display()
console.log('---------------------------')
graph.removeVertex("A")
graph.display()

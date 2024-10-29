// class hashTable{
//     constructor(size){
//          this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total =0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         const index = this.hash(key)
//         this.table[index]= value
//     }
//     get(key){
//         const index = this.hash(key)
//         return this.table[index] 
//     }
//     remove(key){
//         const index = this.hash(key)
//          this.table[index]=undefined
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
// table.set('age','20')
// table.display()
// console.log(table.get('age'));
// table.remove('age')
// table.display()




//hashtable collision

class hashTable{
    constructor(size){
        this.table = new  Array(size)
        this.size=size
    }

    hash(key){
        let total = 0
        for(let i=0 ;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameKeyIndex = bucket.find(item => item[0] === key)
            if(sameKeyIndex){
                sameKeyIndex[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyIndex = bucket.find(item => item[0] === key)
            if(sameKeyIndex){
                return sameKeyIndex[1]
            }
        }
        return console.log('no such key is found');
    }

    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyIndex = bucket.find(item => item[0] === key)
            if(sameKeyIndex){
                bucket.splice(bucket.indexOf(sameKeyIndex),1)
            }
        }
    }
    display(){
        for(let i =0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }

}
const table = new hashTable(50)
table.set('name','sha')
table.set('name','adil')

table.set('age','20')
table.set('mane','cp')
table.remove('mane')
table.display()


//in hashTable we consider the averagee case complexity instead of worst case
// worst case is linear  -o(n)
//aver = o(1)
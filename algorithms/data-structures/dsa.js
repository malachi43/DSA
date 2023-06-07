

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
        this.tardies = 0
    }

    markLate() {
        this.tardies++
        return this.tardies >= 3 ? `You are expelled` : `You were late ${this.tardies} time(s)`
    }
}


let firstName = new Student('UKO', 'MALACHI')
// console.log(firstName)
// console.log(firstName.markLate())
// console.log(firstName)
// console.log(firstName.markLate())
// console.log(firstName)
// console.log(firstName.markLate())
// console.log(firstName)
// console.log(firstName.markLate())




class MaxBinaryHeap {
    constructor() {
        this.array = []
    }
    insert(val) {
        this.array.push(val)
        if (this.array.length >= 2) {
            this.bubbleUp()
        }
        return this.array
    }

    bubbleUp() {
        let index = this.array.length - 1
        let parentIndex = Math.floor((index - 1) / 2)
        while (this.array[index] > this.array[parentIndex]) {
            this.swap(index,parentIndex)
            index = this.array.indexOf(this.array[parentIndex])
            parentIndex = Math.floor((index - 1) / 2)

        }
    }

    swap(idx1, idx2) {
        let temp = this.array[idx1]
        this.array[idx1] = this.array[idx2]
        this.array[idx2] = temp
    }
}



const heap = new MaxBinaryHeap()
console.log(`MaxBinaryHeap: `,heap.insert(41))
console.log(`MaxBinaryHeap: `,heap.insert(39))
console.log(`MaxBinaryHeap: `,heap.insert(33))
console.log(`MaxBinaryHeap: `,heap.insert(18))
console.log(`MaxBinaryHeap: `,heap.insert(27))
console.log(`MaxBinaryHeap: `,heap.insert(12))
console.log(`MaxBinaryHeap: `,heap.insert(55))
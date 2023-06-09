

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
        let arrLength = this.array.length
        if (arrLength === 0) {
            this.array.push(val)
            return this
        } else {
            if (val !== this.array[this.array.length - 1]) {
                this.array.push(val)
                this.bubbleUp()
            }
        }
        return this
    }

    extractMax() {

        if (this.array.length === 1) {
            return this.array.shift()
        } else {
            return this.bubbleDown()
        }
    }

    bubbleUp() {
        let index = this.array.length - 1
        let parentIndex = Math.floor((index - 1) / 2)
        while (this.array[index] > this.array[parentIndex]) {
            this.swap(index, parentIndex)
            index = this.array.indexOf(this.array[parentIndex])
            parentIndex = Math.floor((index - 1) / 2)
        }
    }

    bubbleDown() {
        let currentIndex = 0
        let max = this.array[0]
        this.swap(0, this.array.length - 1)
        this.array.pop()
        let arrLength = this.array.length

        let leftChild
        let rightChild
        let leftChildIndex = (2 * currentIndex) + 1
        let rightChildIndex = (2 * currentIndex) + 2
        let indexToSwapWith = null

        while (true) {

            //check if the "leftChildIndex" is not out of bounds
            if (leftChildIndex < arrLength) {

                leftChild = this.array[leftChildIndex]
                if (leftChild > this.array[currentIndex]) {
                    indexToSwapWith = leftChildIndex
                }
            }

            //check if the "rightChildIndex" is not out of bounds.
            if (rightChildIndex < arrLength) {

                rightChild = this.array[rightChildIndex]

                //check if the "rightChild" is greater than the "leftChild".
                if (
                    (indexToSwapWith === null && rightChild > this.array[currentIndex]) ||
                    (indexToSwapWith !== null && rightChild > leftChild)
                ) {
                    indexToSwapWith = rightChildIndex
                }
            }

            //exit the loop if the "leftChild" and "rightChild" are less than the element at "currentIndex".
            if (indexToSwapWith === null) break

            this.swap(indexToSwapWith, currentIndex)

            //updating with current values
            currentIndex = indexToSwapWith
            leftChildIndex = (2 * currentIndex) + 1
            rightChildIndex = (2 * currentIndex) + 2

            //we update the "indexToSwapWith" variable to know with child to swap on the next iteration.
            indexToSwapWith = null
        }
        return max

    }

    swap(idx1, idx2) {
        let temp = this.array[idx1]
        this.array[idx1] = this.array[idx2]
        this.array[idx2] = temp
    }


}



const heap = new MaxBinaryHeap()
console.log(`MaxBinaryHeap: `, heap.insert(41))
console.log(`MaxBinaryHeap: `, heap.insert(39))
console.log(`MaxBinaryHeap: `, heap.insert(33))
console.log(`MaxBinaryHeap: `, heap.insert(18))
console.log(`MaxBinaryHeap: `, heap.insert(27))
console.log(`MaxBinaryHeap: `, heap.insert(12))
console.log(`MaxBinaryHeap: `, heap.insert(55))
console.log(`Extract-Max: `, heap.extractMax())
console.log(`Extract-Max: `, heap.extractMax())
console.log(`Extract-Max: `, heap.extractMax())
console.log(`Extract-Max: `, heap.extractMax())

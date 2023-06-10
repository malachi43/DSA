
class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}

class PriorityQ {

    constructor() {
        this.array = []
    }

    insert(node) {
        let arrLength = this.array.length
        if (arrLength === 0) {
            this.array.push(node)
            return this
        } else {
            if (node.priority !== this.array[this.array.length - 1].priority) {
                this.array.push(node)
                this.bubbleUp()
            }
        }
        return this
    }

    extractBasedOnPriority() {

        if (this.array.length === 1) {
            return this.array.shift()
        } else {
            return this.bubbleDown()
        }
    }
    //[5,16,8]
    bubbleUp() {
        let index = this.array.length - 1
        let parentIndex = Math.floor((index - 1) / 2)

        while (parentIndex >= 0) {
            if (this.array[index].priority < this.array[parentIndex].priority) {
                this.swap(index, parentIndex)
            }
            if (
                (2 * parentIndex + 1) < this.array.length && (2 * parentIndex + 2) < this.array.length &&
                this.array[2 * parentIndex + 1].priority === this.array[2 * parentIndex + 2].priority
            ) {
                console.log(`Equal nodes`)
                this.array.splice(index, 1)
            }
            index = parentIndex
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
                if (leftChild.priority < this.array[currentIndex].priority) {
                    indexToSwapWith = leftChildIndex
                }
            }

            //check if the "rightChildIndex" is not out of bounds.
            if (rightChildIndex < arrLength) {

                rightChild = this.array[rightChildIndex]

                //check if the "rightChild" is greater than the "leftChild".
                if (
                    (indexToSwapWith === null && rightChild.priority < this.array[currentIndex].priority) ||
                    (indexToSwapWith !== null && rightChild.priority < leftChild.priority)
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

    enqueueBasedOnPriority(val, priority) {
        const newNode = new Node(val, priority)
        return this.insert(newNode)
    }

}


const priorityQueue = new PriorityQ()
console.log(`MaxBinarypriorityQueue: `, priorityQueue.enqueueBasedOnPriority("Malachi", 41))
console.log(`MaxBinarypriorityQueue: `, priorityQueue.enqueueBasedOnPriority("Mikey", 50))
console.log(`MaxBinarypriorityQueue: `, priorityQueue.enqueueBasedOnPriority("Jane", 100))
console.log(`MaxBinarypriorityQueue: `, priorityQueue.enqueueBasedOnPriority("Clark", 0))
console.log(`MaxBinarypriorityQueue: `, priorityQueue.enqueueBasedOnPriority("Sommy", 1))
console.log(`ExtractBasedOnPriority: `, priorityQueue.extractBasedOnPriority())
console.log(`ExtractBasedOnPriority: `, priorityQueue.extractBasedOnPriority())
console.log(`ExtractBasedOnPriority: `, priorityQueue.extractBasedOnPriority())
console.log(`ExtractBasedOnPriority: `, priorityQueue.extractBasedOnPriority())
console.log(`ExtractBasedOnPriority: `, priorityQueue.extractBasedOnPriority())

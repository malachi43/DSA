
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return this.size++
      
    }

    dequeue() {
        if (!this.first) return null
        const nodeToRemove = this.first
        if (this.last === this.first) {
            this.first = null
            this.last = null
        } else {
            this.first = nodeToRemove.next
            nodeToRemove.next = null
        }
        this.size--
        return nodeToRemove.value

    }


}




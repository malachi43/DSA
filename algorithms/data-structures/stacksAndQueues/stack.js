

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            newNode.next = this.first
            this.first = newNode
        }
        return this.size++
    }

    pop() {
        if (!this.first) return null
        const removedNode = this.first
        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = removedNode.next
            removedNode.next = null
        }
        this.size--
        return removedNode.val
    }
}





class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        const currentNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = currentNode.prev
            this.tail.next = null
            currentNode.prev = null
        }
        this.length--
        return currentNode
    }

    shift() {
        if (!this.head) return undefined
        const oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }

        this.length--
        return oldHead

    }
    unshift(val) {
        const newNode = new Node(val)
        const currentHead = this.head

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head = newNode
            currentHead.prev = newNode
            this.head.next = currentHead
        }
        this.length++
        return this
    }

    get(index) {
        if (!this.head || index >= this.length || index < 0) return undefined
        const middle = Math.floor(this.length / 2)
        let count = null
        let currentNode = null
        if (index <= middle) {
            count = 0
            currentNode = this.head
            while (count !== index) {
                currentNode = currentNode.next
                ++count
            }
            return currentNode
        } else {
            currentNode = this.tail
            count = this.length - 1
            while (count !== index) {
                currentNode = currentNode.prev
                --count
            }
            return currentNode
        }
    }

    set(index, value) {
        let node = this.get(index)
        if (node) {
            node.val = value
            return true
        }
        return false
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return Boolean(undefined)
        if (index === 0) return Boolean(this.unshift(value))
        if (index === this.length) return Boolean(this.push(value))

        const newNode = new Node(value)
        let prevNode = this.get(index - 1)
        let afterNode = prevNode.next

        prevNode.next = newNode
        afterNode.prev = newNode
        newNode.next = afterNode
        newNode.prev = prevNode
        this.length++

        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (this.length - 1 === index) return this.pop()

        let nodeToRemove = this.get(index)
        let prevNode = nodeToRemove.prev
        let afterNode = nodeToRemove.next

        nodeToRemove.next = null
        nodeToRemove.prev = null

        prevNode.next = afterNode
        afterNode.prev = prevNode

        this.length--
        return nodeToRemove
    }
}


let list = new DoublyLinkedList()
list.push('January')
list.push("December")
list.push("Derek")
list.push("Stefan")
list.push("Drake")
list.push("Laycon")

console.log(list.remove(6))
console.log()
console.log()
console.log()
console.log()
// console.log(list.get(2))

// console.log(list)



class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
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
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) return undefined

        if (this.length === 1) {
            let temp = this.head
            this.head = null
            this.tail = null
            this.length--
            return temp
        }

        let pre = this.head
        let temp = this.head.next

        while (temp.next !== null) {
            pre = pre.next
            temp = temp.next
        }
        this.length--
        this.tail = pre
        this.tail.next = null
        return temp

    }

    shift() {
        if (!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return temp

    }

    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    toString() {
        if (!this.head) return `:( NO NODE AVAILABLE`
        let head = this.head
        let result = null
        let array = []
        if (this.head) {
            result = `[ ${this.head.val} ]--->`
        }
        while (head.next !== null) {
            array.push(head.next)
            head = head.next
        }

        for (let node of array) {
            result += `[ ${node.val} ]--->`
        }
        return `Singly Linked List: ${result}null length: ${this.length} nodes`
    }
    get(index) {
        if (this.head && index >= 0 && index < this.length) {
            let count = 0
            let value = this.head
            while (count !== index) {
                value = value.next
                ++count
            }

            return value
        }
        return undefined
    }
    set(index, value) {
        let foundNode = this.get(index)
        if (!foundNode) return false
        foundNode.val = value
        return true
    }
    insert(index, value) {

        if (index < 0 || index > this.length) return false

        if (index === this.length) {
            this.push(value)
            return true
        }
        if (index === 0) {
            this.unshift(value)
            return true
        }


        const newNode = new Node(value)

        let beforeNode = this.get(index - 1)
        let afterNode = this.get(index)
        beforeNode.next = newNode
        newNode.next = afterNode
        this.length++
        return true
        //To convert(coarse) a value to a boolean you can use the double bang or exclamation "!!" e.g !!2=> true , !!0=> false
    }

    remove(index) {
        if (index >= this.length || index < 0) return undefined
        if (index === this.length - 1) {
            return this.pop()
        }
        if (index === 0) {
            return this.shift()
        }

        const beforeNode = this.get(index - 1)
        const afterNode = this.get(index + 1)
        let nodeToRemove = this.get(index)
        beforeNode.next = afterNode
        nodeToRemove
        this.length--
        return nodeToRemove
    }

    reverse() {
        let node = this.head
        let prev = null
        let next = null
        this.head = this.tail
        this.tail = node

        for (let i = 0; i < this.length; ++i) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }

        return this
    }

}
console.log();
let list = new SinglyLinkedList()
list.push(100)
list.push(200)
list.push(650)
list.push(150)
list.push(12)
// list.push('<3')
// list.push(':)')
// console.log(list.set(3, 2023))
console.log(list.toString())

console.log(list.reverse())
console.log(list.toString())


// console.log(list.remove(3))
// console.log(list.remove(4))
// console.log(list.remove(5))
// console.log(list.remove(6))
// console.log(list.remove(list.length - 1))

// console.log();
// console.log(list.get(8));
// console.log(list)

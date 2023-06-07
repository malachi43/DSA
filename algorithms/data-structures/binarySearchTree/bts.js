class Node {
    constructor(value) {
        this.val = value
        this.left = null
        this.right = null
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        } else {
            let current = this.root
            while (true) {
                if (value === current.val) return undefined
                if (value > current.val) {
                    if (current.right === null) {
                        current.right = newNode
                        return this
                    }
                    current = current.right
                } else {
                    if (current.left === null) {
                        current.left = newNode
                        return this
                    }
                    current = current.left
                }
            }
        }

    }

    find(value) {
        if (this.root === null) return undefined
        let current = this.root
        while (true) {
            if (value === current.val) return true
            if (value > current.val) {
                if (current.right === null) return false
                if (current.right.val === value) return true
                current = current.right
            } else {
                if (current.left === null) return false
                if (current.left.val === value) return true
                current = current.left
            }
        }
    }

}

const tree = new BinarySearchTree()
console.log(tree.insert(12))
console.log(tree.insert(50))
console.log(tree.insert(24))
console.log(tree.insert(10))

console.log(tree.find(15))


function treeTraversal(tree){
    const queue = []
    const result = []
    let currentTree = tree
    if(currentTree.root === null) return undefined
      queue.push(currentTree.root)
    while(true){
       result.push(queue.shift())
       if(currentTree.left !== null){
        queue.push(currentTree.left)
       }
       if(currentTree.right !== null){
        queue.push(currentTree.right)
       }
       currentTree = currentTree.left
       result.push(queue.shift())
       if(currentTree.left !== null){
        queue.push(currentTree.left)
       }
       if(currentTree.right !== null){
        queue.push(currentTree.right)
       }
       if(queue.length === 0) return
    }
    return result

}


console.log(treeTraversal(tree))
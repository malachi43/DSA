class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}


class BTS {
    constructor() {
        this.root = null
    }

    insert(val) {
        const newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode
            return this
        } else {
            let currentNode = this.root
            while (true) {
                if (currentNode.value === val) return undefined
                if (val < currentNode.value) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    if (currentNode.right === null) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }

}


const traverse = new BTS()
traverse.insert(10)
traverse.insert(6)
traverse.insert(15)
traverse.insert(3)
traverse.insert(8)
traverse.insert(20)


function BFS(tree) {
    let queue = []
    let visited = []
    let current = null
    if (tree !== null) {
        queue.push(tree)
    }

    while (queue.length > 0) {
        current = queue.shift()
        visited.push(current.value)
        if (current.left !== null) {
            queue.push(current.left)
        }
        if (current.right !== null) {
            queue.push(current.right)
        }
    }
    return visited
}



function DFSPreOrder(tree) {
    let visited = []

    function preOrder(tree) {
        if (tree !== null) {
            visited.push(tree.value)
            preOrder(tree.left)
            preOrder(tree.right)
        }
        return visited
    }

    return preOrder(tree)
}

function DFSPostOrder(tree) {
    let visited = []

    function postOrder(tree) {
        if (tree !== null) {
            postOrder(tree.left)
            postOrder(tree.right)
            visited.push(tree.value)
        }
        return visited
    }

    return postOrder(tree)


}

function DFSInOrder(tree) {
    let visited = []

    function inorder(tree) {
        if (tree !== null) {
            inorder(tree.left)
            visited.push(tree.value)
            inorder(tree.right)
        }
        return visited
    }

    return inorder(tree)

}

console.log(`DFSPreOrder:  `, DFSPreOrder(traverse.root))
console.log()
console.log(`DFSPostOrder:  `, DFSPostOrder(traverse.root))
console.log()
console.log(`DFSInOrder:  `, DFSInOrder(traverse.root))
console.log()
console.log(`Breadth First search: `, BFS(traverse.root))

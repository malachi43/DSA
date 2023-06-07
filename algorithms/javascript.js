function stringify(obj) {
    for (let key in obj) {
        if (obj[key] === 'boolean') obj[key] = obj[key]
        if (Array.isArray(obj[key])) {
            let res = "["
            for (let i = 0; i < obj[key].length; ++i) {
                if (i === obj[key].length - 1) res += `"${obj[key][i]}"`
                else res += `"${obj[key][i]}",`
            }
            res += "]"
            obj[key] = res
        }
        if (typeof obj[key] === 'object') {
            obj[key] = stringify(obj[key])
        }
    }
    obj[`done by`] = 'Uko Chibuike Malachi'
    return obj
}


const obj = {
    name: "Chibuike",
    hobbies: ['football', 'swimming', 'dancing'],
    rating: 123,
    isFit: true
}


// console.log(stringify(obj))

function longestSubstring(str, str2) {
    let matches = 0
    for (let i = 0; i < str.length; ++i) {
        for (let j = 0; j < str2.length; ++j) {

            if (str[i + j] === str2[j]) {
                if (j === str2.length - 1) ++matches
            }
            else break
        }
    }

    return matches

}

// console.log(longestSubstring('wow/omg/hu/omg/omg/omg/omg', `omg`))



function recurseAnObj(obj) {
    let result = {}
    let arr = []
    for (let item in obj) {
        if (obj[item] === "object") {
            recurseAnObj(obj[item])
        } else {
            result[item] = obj[item] === "number" ? `${obj[item]}` : obj[item]
            arr.push(obj[item])
        }
    }

    return { result, arr }
}

let info = {
    school: "Comrades High School", data: {
        name: "Uko Chibuike Malachi", age: 25, bloodGroup: "O-", genotype: "AS"
    }
}

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



let treeArr = []
function printTreePath(tree, treeArr) {
    if (tree === null) return null
    treeArr.push(tree.value)
    // console.log(`tree-value: `, tree)
    printTreePath(tree.left, treeArr)
    printTreePath(tree.right, treeArr)
    return treeArr
}

const traverse = new BTS()
traverse.insert(12)
traverse.insert(10)
traverse.insert(24)
traverse.insert(19)
traverse.insert(12)
traverse.insert(1)
traverse.insert(7)
traverse.insert(0)
traverse.insert(50)






function insertRecursively(value, tree) {
    const newNode = new Node(value)
    if (tree === null) {
        tree = newNode
    }
    else {
        if (value > tree.value) {
            if (tree.right === null) {
                tree.right = newNode
            } else {
                console.log(`inside right sub-tree`)
                insertRecursively(value, tree.right)
            }

        } else {
            if (tree.left === null) {
                tree.left = newNode
            } else {
                console.log(`inside left sub-tree`)
                insertRecursively(value, tree.left)
            }
        }
    }
}

// console.log(`start`)
// insertRecursively(-1, traverse.root)
// console.log(traverse)
// console.log(printTreePath(traverse.root, treeArr))

// console.log(`end`)
console.log()


let a = ["a", "b", "c"]
let b = [1, 2, 3]

// console.log(a.splice(0, 2))
// console.log(a)

let arr = [5, 10, 300, 74, 9, 200, 110]
let output = []
function async(item, callback) {
    console.log(`processing data [ ${item} ]`)
    setTimeout(function () {
        if (typeof item === 'string') return callback(new Error("Not a number"), null)
        callback(null, item ** 2)
    }, 1000)
}

function final() {
    console.log(`Results: [${result}]`)
}

function seriesProcessing(array, processed) {
    if (array.length > 0) {
        async(array[0], function (err, value) {
            if (err) processed.push(" " + err.message + " ")
            else {
                processed.push(" " + value + " ")
            }
            seriesProcessing(array.slice(1), processed)
        })
    } else {
        console.log()
        console.log(`Processed input: [${processed}]`)
    }
}

seriesProcessing(arr, output)


function parallelProcessing(array, output) {
    array.forEach((element) => {
        async(element, (err, result) => {
            if (err) {
                output.push(" " + err.message + " ")
            }
            else {
                output.push(" " + result + " ")
            }
            if (output.length === array.length) {
                console.log()
                console.log(`Processed input: [${output}]`)
            }
        })
    })
}

// parallelProcessing(arr, output)

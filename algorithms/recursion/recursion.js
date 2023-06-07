function sumRange(num) {
    if (num === 1) return 1
    return num + sumRange(num - 1)
}


function factorial(num) {
    if (num === 1) return 1
    return num * factorial(num - 1)
}

function collectOdds(arr) {
    let results = []

    function helper(arr) {
        if (arr.length === 0) return
        if (arr[0] % 2 !== 0) results.push(arr[0])
        helper(arr.slice(1))
    }
    helper(arr)
    return results
}

function pureOdd(arr) {
    let result = []
    if (arr.length === 0) return result
    if (arr[0] % 2 !== 0) result.push(arr[0])
    //concat creates a copy of the array
    result = result.concat(pureOdd(arr.slice(1)))
    return result
}



//Using recursion
function power(base, times) {
    let result = 1
    function multiply(times) {
        if (times === 0) return
        result *= base
        multiply(--times)
    }

    multiply(times)
    return result

}

function purePower(base, exponent) {
    if (exponent === 1 || exponent === 0) return base
    return base * purePower(base, --exponent)
}

function factorial(num) {
    if (num === 0) return 1
    return num * factorial(--num)
}

function productArrayHelper(arr) {
    let arrProduct = 1
    function productOfArray(arr) {
        if (arr.length === 0) return arr
        arrProduct *= arr[0]
        productOfArray(arr.slice(1))
    }

    productOfArray(arr)
    return arrProduct
}

function recursiveRange(num) {
    if (num === 1) return 1
    if (num <= 0) return 0
    return num + recursiveRange(--num)
}

function fib(num) {
    if (num === 0) return 0
    if (num === 1) return 1
    return fib(num - 1) + fib(num - 2)
}


function reverse(str) {
    if (str.length === 1) return str[0]
    return reverse(str.slice(1)) + str[0]
}


function isPalindrome(str) {
    if (str.length === 0) return true
    if (str.length === 1) return true
    if (str.length === 2) return str[0] === str[1]
    console.log(str)
    if (str.charAt(0) === str.charAt(str.length - 1)) return isPalindrome(str.slice(1, -1))
    return false
}

// const map = (element) => element % 2 !== 0

function someRecursiveHelper(arr, cb) {
    function someRecursive(arr, cb) {
        if (arr.length === 0) return cb()
        if (!Array.isArray(arr)) return `Not an array`
        if (typeof cb !== "function") return `Not a function`
        return someRecursive(arr.slice(1), cb)
    }

    return someRecursive(arr, cb)
}





function flatten(arr) {
    let flatArr = []
    for (let i = 0; i < arr.length; ++i) {
        if (Array.isArray(arr[i])) {
            flatArr = flatArr.concat(flatten(arr[i]))
        }
        else {
            flatArr.push(arr[i])
        }
    }
    return flatArr

}



function capitalizeFirstHelper(arr) {
    let firstCapitalArr = []
    function capitalizeFirst(arr) {
        if (arr.length === 0) return
        firstCapitalArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1))
        capitalizeFirst(arr.slice(1))
    }
    capitalizeFirst(arr)
    return firstCapitalArr
}


function capitalizeWords(arr) {
    let firstCapitalArr = []
    function capitalizeAll(arr) {
        if (arr.length === 0) return
        firstCapitalArr.push(arr[0].toUpperCase())
        capitalizeAll(arr.slice(1))
    }
    capitalizeAll(arr)
    return firstCapitalArr
}


function nestedEvenSum(obj) {
    let sum = 0
    function nestedSum(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                nestedSum(obj[key])
            }
            else {
                if ((typeof obj[key] === 'number' && obj[key] % 2 === 0)) sum += obj[key]
            }
        }
    }
    nestedSum(obj)
    return sum
}
function stringifyNumbers(obj) {
    let finalObj = {}

    function stringify(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'number') {
                finalObj[key] = obj[key].toString()
            } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                finalObj[key] = stringifyNumbers(obj[key])
            }
            else {
                finalObj[key] = obj[key]
            }
        }
        return finalObj
    }
    stringify(obj)
    return finalObj
}



function collecttringsHelper(obj) {
    let arr = []
    function collecttrings(obj) {
        for (let key in obj) {
            if (typeof obj[key] === 'string') {
                arr.push(obj[key])
            } else if (typeof obj[key] === 'object') {
                collecttrings(obj[key])
            }
        }
    }
    collecttrings(obj)
    return arr
}



let obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

let obj3 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
const obj4 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
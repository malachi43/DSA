const assert = require('assert')
// const name = 'Malachi'
// const strLength = name.length - 1
// let reverseStr = ''

// for (let i = strLength; i >= 0; i--) {
//     reverseStr += name[i]
// }

// console.log(reverseStr)


function charCount(str) {
    let obj = {}
    for (let char of str) {
        char = char.toLowerCase()
        obj[char] = obj[char] > 0 ? ++obj[char] : 1
    }
    return obj
}

function same(arr1, arr2) {
    let squareArray = []
    let obj = {}
    if (arguments.length !== 2 || arr1.length !== arr2.length) return false
    for (let arr of arr1) {
        let index = arr2.indexOf(arr ** 2)
        if (index === -1) return false
        console.log(`${arr ** 2} removed from [${arr2}]`)
        arr2.splice(index, 1)
    }
    return true
}

//FREQUENCY COUNTER APPROACH
function optimizedSame(arr1, arr2) {
    let obj1 = {}
    let obj2 = {}
    if (arguments.length !== 2 || arr1.length !== arr2.length) return false
    for (let arr of arr1) {
        obj1[arr] = (obj1[arr] || 0) + 1
    }
    for (let arr of arr2) {
        obj2[arr] = (obj2[arr] || 0) + 1
    }

    for (let prop in obj1) {
        //check if the property(prop) in obj1 has it square property in obj2
        if (!(prop ** 2 in obj2)) return false
        //check if both obj1 and obj2 properies have the same value
        if ((obj2[prop ** 2] !== obj1[prop])) return false
    }
    console.log(obj1)
    console.log(obj2)
    return true
}


function anagram(str1, str2) {

    if (str1.length !== str2.length) return false
    let obj1 = {}
    let obj2 = {}

    for (let char of str1) {
        char = char.toLowerCase()
        obj1[char] = (++obj1[char] || 1)
    }

    for (let char of str2) {
        char = char.toLowerCase()
        obj2[char] = (++obj2[char] || 1)
    }

    for (let char in obj2) {
        if (obj1[char] !== obj2[char]) return false
    }
    console.log(obj1)
    console.log(obj2)
    return true
}

//USING MULTIPLE POINTER APPROACH
function sumZero(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        }
        else if (sum > 0) {
            --right
        }
        else {
            ++left
        }
    }
    return `no pair sums to zero(0)`
}

function countUniqueValues(arr) {
    if (arr.length == 0) return 0
    let i = 0
    let j = 1
    let count = 1

    while (i < arr.length && j < arr.length) {
        // console.log(arr[i], arr[j])
        if (arr[i] - arr[j] !== 0) {
            ++count
        }
        ++i
        ++j
    }
    return count
}


function uniqueValues(arr) {
    if (arr.length === 0) return 0
    let i = 0
    let j = 1
    let arrLength = arr.length
    while (i < arrLength && j < arrLength) {
        if (arr[i] === arr[j]) {
            ++j
        }
        else {
            ++i
            arr[i] = arr[j]
            ++j
        }
    }
    return i + 1
}


function sumOfLargestConsecutiveArray(arr, num) {
    if (num > arr.length) return null
    let max = -Infinity
    let temp = 0
    for (let i = 0; i < (arr.length - num) + 1; i++) {
        for (let j = 0; j < num; j++) {
            temp += arr[i + j]
        }
        if (temp > max) {
            max = temp
        }
        console.log(`temp: `, temp, `max: `, max)
        temp = 0

    }
    return max
}

//USING SLIDING WINDOW APPROACH
function optimizeSumOfSubArray(arr, num) {
    if (num > arr.length) return null
    let maxSum = 0
    let tempSum = 0
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        //At the current index subtract the third element to the left (i - 3)
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}


function sameFrequency(num1, num2) {

    let arg1 = Array.from(String(num1))
    let arg2 = Array.from(String(num2))
    if (arg1.length !== arg2.length) return false
    let obj1 = {}
    let obj2 = {}

    for (let digit of arg1) {
        obj1[digit] = ++obj1[digit] || 1
    }
    for (let digit of arg2) {
        obj2[digit] = ++obj2[digit] || 1
    }

    for (let digit in obj1) {
        if (obj1[digit] !== obj2[digit]) return false
    }

    return true

}


function areThereDuplicates(...values) {
    let i = 0
    let j = 1
    while (i < j && j < values.length) {
        console.log(`in loop`)
        if (values[i] === values[j]) {
            console.log(`${i} incremented`)
            return true
        } else {
            j++
            ++i
        }
    }
    return false

}

function areThereDuplicates(...values) {
    let obj = {}

    for (let value of values) {
        obj[value] = ++obj[value] || 1
    }
    console.log(obj)
    for (let value in obj) {
        if (obj[value] >= 2) return true
    }
    return false
}

function averagePair(arr, num) {
    let i = 0
    let j = 1
    while (i < arr.length && j < arr.length) {
        console.log(`average: `, (arr[i] + arr[j]) / 2)
        if ((arr[i] + arr[j]) / 2 === num) return true
        ++i
        ++j
    }
    return false
}

// console.log(`is average: `, averagePair([], 8.5))


function isSubsequence(str, strCompare) {
    let i = 0
    let j = 0
    while (j < strCompare.length) {
        if (str[i] === strCompare[j]) {
            i++
        } else {
            ++j
        }
        if (i === str.length) return true

    }
    return false
}

function maxSubArray(arr, num) {
    if (arr.length === 0) return null
    if (num > arr.length) return null
    let maxSum = 0
    let testMax = 0
    for (let i = 0; i < num; ++i) {
        maxSum += arr[i]
    }
    testMax = maxSum

    for (let i = num; i < arr.length; ++i) {
        testMax = testMax + arr[i] - arr[i - num]
        maxSum = Math.max(maxSum, testMax)
    }
    return maxSum
}


function longestSubString(str) {

}



function getNumberOfPositiveAndNegativeIntegers(arr) {
    let i = 0
    let j = arr.length - 1
    let positiveCount = 0
    let negativeCount = 0
    for (let k = 0; k < arr.length; ++k) {
        if (arr[i] < 0) {
            ++negativeCount
            ++i
        }
        if (arr[j] >= 0) {
            ++positiveCount
            --j
        }
    }
    return { positiveCount, negativeCount }
}

// console.log(getNumberOfPositiveAndNegativeIntegers([-4, -3, -2, -2, -2, -2, -1, 0, 3, 7, 9, 10]))


function minSubArrayLength(arr) {
    let minSum = 0
    let currentSum = 0
    let minIndex = 0
    let maxIndex = 0
    let currentMaxIndex = 0
    if (arr === undefined) return `Pass an argument`
    if (!Array.isArray(arr)) return `Not an array`
    if (arr.length === 0) return `Array cannot be empty`
    if (!arr.every(n => Number.isInteger(n))) return `Must be an array of integers`

    for (let i = 0; i < arr.length; ++i) {
        //If the current sum is zero reset the index to the current index, since this is the new minimum
        if (currentSum === 0) minIndex = i

        currentMaxIndex = i
        currentSum += arr[i]
        //IF THE CURRENT SUM IS GREATER THAN ZERO RETURN ZERO
        currentSum = Math.min(0, currentSum)

        minSum = Math.min(currentSum, minSum)

        if (minSum === currentSum) {
            //The new maxIndex when the value of currentSum and maxSum are equal
            maxIndex = currentMaxIndex
        }
    }
    console.log(`minimum sub array: `, arr.slice(minIndex, maxIndex + 1))
    return arr.slice(minIndex, maxIndex + 1).length
}

// console.log(`minimum sub array length: `, minSubArrayLength([]))

function maxSubArrayOfAtleakKElements(arr, k) {
    if (arguments.length < 2) return `Two arguments required`
    if (arr === undefined) return `Cannot have an empty argument`
    if (!Array.isArray(arr)) return `Not an array`
    if (k < 0) return `Minimum value should be 1`


    let windowSum = 0
    let tempSum = 0
    let startIndex = 0
    let endIndex = 0
    let maxIndex = 0



    for (let i = 0; i < k; ++i) {
        windowSum += arr[i]
    }

    tempSum = windowSum
    for (let i = k; i < arr.length; ++i) {
        endIndex = i

        tempSum = tempSum + arr[i] - arr[i - k]
        if (tempSum >= windowSum) {
            startIndex = i - k + 1
            maxIndex = endIndex + 1
            windowSum = tempSum
        }
    }
    console.log(`maximum sub array sum: `, windowSum)
    return arr.slice(startIndex, maxIndex)
}

// console.log(`maximum array length: `, maxSubArrayOfAtleakKElements([1, 2, -4, 3, 4, -2], 3))

function kadaneWindow(arr, k) {
    if (arguments.length < 2) return `Two arguments required`
    if (arr === undefined) return `Cannot have an empty argument`
    if (!Array.isArray(arr)) return `Not an array`
    if (k < 0) return `Minimum value should be 1`
    let currentSum = 0
    let maxArr = []
    let maxSum = 0
    let windowSum = 0
    let tempSum = 0
    arr.map(n => {
        currentSum += n
        if (currentSum < 0) currentSum = 0
        maxArr.push(currentSum)
        console.log(maxArr)
    })

    for (let i = 0; i < k; ++i) {
        windowSum += arr[i]
        console.log(windowSum)
    }
    for (let i = k; i < arr.length; ++i) {
        console.log(i)
        windowSum += windowSum + arr[i] - arr[i - k]
        tempSum = Math.max(windowSum, tempSum)

        console.log(`maxSum: `, tempSum)
    }
    return tempSum
}

// console.log(kadaneWindow([1, 2, -4, 3, 4, -2], 3))


function maxSubArray(arr, size) {
    let windowSum = 0
    let tempSum = 0
    for (let i = 0; i < size; ++i) {
        windowSum += arr[i]
    }

    tempSum = windowSum

    for (let i = size; i < arr.length; ++i) {
        tempSum = tempSum + arr[i] - arr[i - size]
        windowSum = Math.max(tempSum, windowSum)
    }
    return windowSum
}

function minSubArray(arr, size) {
    let windowSum = 0
    let tempSum = 0

    for (let i = 0; i < size; ++i) {
        windowSum += arr[i]
    }

    tempSum = windowSum

    for (let i = size; i < arr.length; ++i) {
        tempSum = tempSum + arr[i] - arr[i - size]
        windowSum = Math.min(tempSum, windowSum)
    }
    return windowSum
}

// console.log(`max sum of sub-array: `, maxSubArray([-1, 2, 3, 1, -3, 2], 2))
// console.log(`min sum of sub-array: `, minSubArray([-1, 2, 3, 1, -3, 2], 2))
// console.log(`max sum of sub-array of k elements : `, maxSubArrayOfAtleakKElements([-1, 2, 3, 0, -3, 9], 2))


//[-1, 2, 3, 1, -3, 2]
//[10011001101]

function maxSequenceOfConsecutiveOne(arr, maxFlip) {
    //flip zero to one and increment
    //if flip is equal  or less than to maxFlip and objLen is > than currentLen objLen = currentLen
    // if maxFlip is > than flipCount decrement from the left
    let zeroFlip = 0
    let startIndex = 0
    let endIndex = 0
    let arrStart = 0
    let maxLength = 0
    let arrLength = 0
    let currentIndex = 0
    for (let i = 0; i < arr.length; ++i) {
        currentIndex = i
        if (arr[i] === 0) ++zeroFlip

        //KEEP TRACK OF ARRAY LENGTH
        maxLength = (currentIndex - startIndex) + 1
        if (zeroFlip <= maxFlip && maxLength >= arrLength) {
            arrStart = startIndex
            arrLength = maxLength + 1
            endIndex = currentIndex + 1
        }

        while (zeroFlip > maxFlip) {
            if (arr[startIndex] === 0) --zeroFlip
            ++startIndex
        }

    }
    return arr.slice(arrStart, endIndex)

}

// console.log(`maxSequenceOfConsecutiveOne: `, maxSequenceOfConsecutiveOne([1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0], 2))

function shortestSubString(str, desiredChar) {
    assert(str.length > desiredChar.length, 'String must be greater than the second parameter')
    let obj = {}

    for (let char of desiredChar) {
        obj[char] = obj[char] ? ++obj[char] : 1
    }


    let characterArray = Array.from(str)


    console.log(characterArray)
    console.log(obj)
}

// console.log(shortestSubString('abcgfhkghfkhg', "abcabc"))


function minSubArrayLength(arr, num) {
    assert(Array.isArray(arr), 'must be an array')
    assert(Number.isInteger(num) && num > 0, 'must be a positive integer')

    let startIndex = 0
    let endIndex = 0
    let minStart = 0
    let maxEnd = 0
    let arrLength = Infinity
    let minLength = 0
    let currentIndex = 0
    let currentSum = 0
    let subArrLen = 0

    for (let i = 0; i < arr.length; ++i) {
        currentIndex = i
        currentSum += arr[i]
        subArrLen = currentIndex - startIndex
        if (currentSum >= num && arrLength >= subArrLen) {
            minStart = startIndex
            maxEnd = currentIndex
            arrLength = subArrLen
            while (currentSum >= num) {
                currentSum -= arr[startIndex]
                ++startIndex
            }
        }

    }
    console.log(`Array: min array length: `, arr.slice(minStart, maxEnd + 1))
    return arrLength === Infinity ? 0 : arrLength
}

// console.log(minSubArrayLength([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))
////////////////////////////////////////////////////////////////////////
//RECURSION////////

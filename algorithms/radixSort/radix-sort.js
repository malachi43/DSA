

// function getDigit(num, position) {
//     let number = Array.from(num.toString())
//     let pos = number.length - position
//     return number[pos] === undefined ? 0 : Number(number[pos])
// }

// function digitCount(num){
//     return Number(num.toString().length)
// }


function getDigit(num, pos) {
    return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10
}

function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.abs(Math.log10(num))) + 1
}

function mostDigit(arr) {
    let max = 0
    for (let i = 0; i < arr.length; ++i) {
        if (digitCount(arr[i]) > max) {
            max = digitCount(arr[i])
        }
    }

    return max
}


function radixSort(arr) {
    let iteration = mostDigit(arr)

    for (let k = 0; k < iteration; ++k) {
        let buckets = Array.from({ length: 10 }, () => [])
        for (let i = 0; i < arr.length; ++i) {
            let digit = getDigit(arr[i], k)
            buckets[digit].push(arr[i])
        }
        arr = [].concat(...buckets)
    }

    return arr
}

let result = digitCount(0)
// console.log(`mostDigit: `, mostDigit([1234, 5678, 8906, 7889, 1234, 1245, 4565, 8956]))
console.log(`buckets: `, radixSort([23, 345, 5467, 12, 2345, 9852]))

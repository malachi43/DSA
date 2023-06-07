

function linearSearch(arr, value) {
    if (!Array.isArray(arr)) throw new Error(`Not an array`)
    for (let item in arr) {
        if (arr[item] === value) return item
    }
    return -1
}

function binarySearch(arr, value) {
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let mid = Math.floor(start + end / 2)

        if (arr[mid] === value) return mid
        if (arr[mid] < value) {
            start = mid + 1
        }
        else {
            end = mid - 1
        }
    }
    return -1
}

function swap(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}


//The "isSwap" made the sort efficient if the array is nearly sorted. The "isSwap" skips the loop if there is no previous swap
function bubbleSort(arr) {
    let isSwap = false

    for (let i = arr.length; i > 0; --i) {
        isSwap = false
        for (let j = 0; j < i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                isSwap = true
            }
        }
        if (!isSwap) break
    }
    return arr
}


//Compares each array element with the min value and after each iteration replaces the initial position of the min value we began with, with the new found min index. Note we are taking in account the indexes.
function selectionSort(arr) {
    for (let i = 0; i < arr.length; ++i) {
        let min = i
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        if (min !== i) {
            swap(arr, i, min)
        }
    }
    return arr
}

function insertionSort(arr) {
    let j = null
    for (let i = 1; i < arr.length; ++i) {
        let currentValue = arr[i]

        for (j = i - 1; j > -1 && arr[j] > currentValue; --j) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentValue
    }

    return arr

}
console.log(`bubbleSort: `, bubbleSort([8, 12, -3, 0, 1000, 234567, 29, 37, 45, 88]))
// console.log(`selectionSort: `, selectionSort([8, 12, -3, 0, 1000, 234567, 29, 37, 45, 88]))
console.log(`insertionSort: `, insertionSort([12, 8, -3, 0, 1000, 234567, 29, 37, 45, 88]))

// console.log(`Linear search: `, linearSearch([10, 15, 20, 25, 30], 15))
// console.log(`binary search: `, linearSearch([10, 15, 20, 25, 30], 20))
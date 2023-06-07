
function swap(arr, idx1, idx2) {
    // let temp = arr[idx1]
    // arr[idx1] = arr[idx2]
    // arr[idx2] = temp
    [arr[idx2],arr[idx1]] = [arr[idx1], arr[idx2]]
}

function merge(arr1, arr2) {
    let i = 0
    let j = 0
    let len1 = arr1.length
    let len2 = arr2.length
    let result = []
    while (i < len1 && j < len2) {
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j])
            ++j
        } else {
            result.push(arr1[i])
            ++i
        }
    }
    while (i < len1) {
        result.push(arr1[i])
        ++i
    }
    while (j < len2) {
        result.push(arr2[j])
        ++j
    }

    return result
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)

}
console.log();
// console.log(`Sorted Array: `, mergeSort([100, 99, 2, 14, 1, 10, 50]));
// console.log(`MERGE-ARRAY: `, merge([1, 10, 50], [2, 14, 99, 100]))



function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start]
    let swapIdx = start
    for (let i = start + 1; i <= end; ++i) {
        if (pivot > arr[i]) {
            ++swapIdx
            swap(arr, i, swapIdx)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right)
        quickSort(arr, left, pivotIdx - 1)
        quickSort(arr, pivotIdx + 1, right)
    }
    return arr
}

console.log(`quickSort: `, quickSort([4, 6, 9, 1, 0, 2, 5]))
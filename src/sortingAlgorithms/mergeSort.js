export function getMergeSortAnimations(arr) {
    const animations = [];

    if (arr.length <= 1) return arr;

    mergeSort(arr, 0, arr.length - 1, animations);
    return animations;
}

function mergeSort(arr, start, end, animations) {
    if (start >= end) return;

    let mid = start + parseInt((end - start) / 2);

    // Recursively sort the array by diving it in halves
    mergeSort(arr, start, mid, animations);
    mergeSort(arr, mid + 1, end, animations);

    // Merge the sorted halves back together
    merge(arr, start, mid, end, animations);
}

function merge(arr, start, mid, end, animations) {
    const nL = mid - start + 1;
    const nR = end - mid;

    /* Create temp copies of the array
    One for each half */
    const L = new Array(nL);
    const R = new Array(nR);
    for (let i = 0; i < nL; i++) L[i] = arr[start + i];
    for (let j = 0; j < nR; j++) R[j] = arr[mid + 1 + j];

    let i = 0, j = 0, k = start;

    // There are elements in both temp arrays
    while (i < nL && j < nR) {
        // Merge both halves back into the main array
        if (L[i] <= R[j]) {
            /* L[i] is smaller or equal to R[j]
            L[i] should be placed before R[j]
            Insert L[i] into the main array */
            animations.push([k, L[i], "selected"]);
            animations.push([k, L[i], "visited"]);
            arr[k] = L[i];
            i++;
        } else {
            /* R[j] is smaller than L[i]
            R[j] should be placed before L[i]
            Insert R[j] into the main array */
            animations.push([k, R[j], "selected"]);
            animations.push([k, R[j], "visited"]);
            arr[k] = R[j];
            j++;
        }

        k++;
    }

    // There are still elements in the left half
    while (i < nL) {
        // Insert the remaining elements into the main array
        animations.push([k, L[i], "selected"]);
        animations.push([k, L[i], "visited"]);
        arr[k] = L[i];
        i++;
        k++;
    }

    // There are still elements in the right half
    while (j < nR) {
        // Insert the remaining elements into the main array
        animations.push([k, R[j], "selected"]);
        animations.push([k, R[j], "visited"]);
        arr[k] = R[j];
        j++;
        k++;
    }
}
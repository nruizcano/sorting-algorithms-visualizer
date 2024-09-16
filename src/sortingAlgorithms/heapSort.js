export function getHeapSortAnimations(arr) {
    const animations = [];

    if (arr.length <= 1) return arr;

    heapSort(arr, animations);
    return animations;
}

function heapSort(arr, animations) {
    let n = arr.length;

    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i, animations);

    /* Iteretare the array backwards
    Swapping the root element (largest) with the last one */
    for (let i = n - 1; i > 0; i--) {
        animations.push([0, i, "selected"]);
        animations.push([0, i, "visited"]);
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // Call max heapify on the reduced heap
        heapify(arr, i, 0, animations);
    }
}

// Heapify a subtree (node i as the root)
function heapify(arr, n, i, animations) {
    let largest = i; // Asumes the root is the largest element in the heap
    let l = 2 * i + 1; // idx of the left children of i
    let r = 2 * i + 2;// idx of the right children of i

    /* If the left child is larger than root
    Then the left child is the new root */
    if (l < n && arr[l] > arr[largest]) largest = l;

    /* If the right child is larger than root
    Then the right child is the new root */
    if (r < n && arr[r] > arr[largest]) largest = r;

    if (largest !== i) {
        /* New largest is not the same as the original i
        Swap their positions */
        animations.push([i, largest, "selected"]);
        animations.push([i, largest, "visited"]);
        let swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest, animations);
    }
}
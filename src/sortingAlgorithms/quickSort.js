export function getQuickSortAnimations(arr) {
    const animations = [];
    
    if (arr.length <= 1) return arr;
    
    quickSort(arr, 0, arr.length - 1, animations);
    return animations;
}

function quickSort(arr, start, end, animations) {
    if (start < end) {
        /* Rearrange the array into two parts
        Return the pivot */
        const pi = partition(arr, start, end, animations);

        // Recursively sort the array by diving it around the pivot
        quickSort(arr, start, pi - 1, animations); // Sort left part
        quickSort(arr, pi + 1, end, animations); // Sort right part
    }
}

function partition(arr, start, end, animations) {
    const pivot = arr[end];
    let i = start - 1;
    
    // Show pivot
    animations.push([end, end, "pivot"]);
    
    for (let j = start; j < end; j++) {
        if (arr[j] < pivot) {
            // Smaller element was found
            i++;
            animations.push([i, j, "selected"]);

            /* Element is smalled than the pivot
            Move it to the left */
            if (i !== j) animations.push([i, j, "swapped"]); // Only show when they swap, not selected
            animations.push([i, j, "visited"]);
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Move the pivot
    animations.push([i + 1, end, "swapped"]);
    animations.push([i + 1, end, "visited"]);
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    
    return i + 1;
}
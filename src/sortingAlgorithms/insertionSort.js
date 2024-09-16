export function getInsertionSortAnimations(arr) {
    const animations = [];
    
    if (arr.length <= 1) return arr;
    
    insertionSort(arr, animations);
    return animations;
}

function insertionSort(arr, animations) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            /* Element is greater than the key
            Move it one position ahead */
            animations.push([j, j + 1, "selected"]);
            animations.push([j, j + 1, "swapped"]);  
            animations.push([j, j + 1, "visited"]);
            arr[j + 1] = arr[j];

            j -= 1;
        }
        
        arr[j + 1] = key;
    }
}
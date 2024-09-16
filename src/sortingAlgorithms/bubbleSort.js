export function getBubbleSortAnimations(arr) {
    const animations = [];
    
    if (arr.length <= 1) return arr;
    
    bubbleSort(arr, animations);
    return animations;
}

function bubbleSort(arr, animations) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false;
        
        for (let j = 0; j < arr.length - i - 1; j++) {
            // Show selected elements to compare
            animations.push([j, j + 1, "selected"]);
            
            if (arr[j] > arr[j + 1]) {
                /* Left element is greater than right element
                Swap their positions */
                animations.push([j, j + 1, "swapped"]);
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                
                swapped = true;
            }
            
            // Selected elements were treated
            animations.push([j, j + 1, "visited"]);
        }
        
        // If no elements were swapped, then break
        if (swapped === false) break;
    }
}